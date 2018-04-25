import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { battle } from '../utils/api';
import PlayerPreview from './PlayerPreview';
import Loading from './Loading';

const Profile = props => {
  const { avatar_url: avatar, name, login, location, followers, following, public_repos: repos, blog } = props.info;
  return (
    <PlayerPreview avatar={avatar} username={login}>
      <ul>
        <li className="profile-details--spacing">{name}</li>
        <li className="profile-details--spacing">{location}</li>
        <li className="profile-details--spacing">Followers: {followers}</li>
        <li className="profile-details--spacing">Following: {following}</li>
        <li className="profile-details--spacing">Public Repos: {repos}</li>
        <li className="profile-details--spacing">
          <a href={blog}>{blog}</a>
        </li>
      </ul>
    </PlayerPreview>
    // {/* <img className="battle-profile__avatar" src={props.profile.avatar_url} alt={`Avatar for ${props.profile.name}`} />
    // <h3>@{props.profile.login}</h3> */}
  );
};

const Player = props => (
  <section className="battle-column">
    <h1 className="results-header">{props.label}</h1>
    <h3 className="results-score">Score: {props.score}</h3>
    <Profile info={props.profile} />
  </section>
);

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.objectOf(PropTypes.any).isRequired
};

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search);

    battle([playerOneName, playerTwoName]).then(results => {
      if (results === null) {
        return this.setState(() => ({
          error: 'Looks like there was an error. Check that both users exist on Github',
          loading: false
        }));
      }

      this.setState(() => ({
        error: null,
        loading: false,
        winner: results[0],
        loser: results[1]
      }));

      console.log(results);
    });
  }
  render() {
    const { error, winner, loser, loading } = this.state;
    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return (
        <div className="error-message">
          <p>{error}</p>
          <Link to="/battle">Try Again</Link>
        </div>
      );
    }
    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}

export default Results;
