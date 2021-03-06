import axios from 'axios';

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
const params = `?client_id=${id}&client_secret=${secret}`;

function getProfile(username) {
  return axios.get(`https://api.github.com/users/${username}${params}`).then(user => user.data);
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`).then(repos => repos.data);
}

function getStarCount(repos) {
  return repos.reduce((count, repo) => count + repo.stargazers_count, 0);
}

function calculateScore(profile, repos) {
  const { followers } = profile;
  const totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
}

function handleError(err) {
  console.error(err);
  return null;
}

function getUserData(player) {
  return axios.all([getProfile(player), getRepos(player)]).then(data => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile,
      score: calculateScore(profile, repos)
    };
  });
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export function battle(players) {
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}

export function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(
    `https://api.github.com/search/repositories${params}&q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return axios.get(encodedURI).then(response => response.data.items);
}
