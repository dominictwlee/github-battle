import React from 'react';
import PropTypes from 'prop-types';
import fetchPopularRepos from '../utils/api';

const SelectLanguage = props => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <nav className="navbar-wrapper">
      <ul className="langs-nav">
        {languages.map(language => (
          <li key={`${language}-li`} className="langs-nav__item">
            <a
              style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={props.onSelect.bind(null, language)}
              key={language}
            >
              {language}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

const RepoGrid = props => (
  <ul className="popular-list">
    {props.repos.map((repo, index) => (
      <li key={repo.name} className="popular-list__item">
        <h1 className="ranking">#{index + 1}</h1>
        <ul className="profile-details">
          <li>
            <img className="profile-details__avatar" src={repo.owner.avatar_url} alt={`Avatar for ${repo.name}`} />
          </li>
          <li>
            <a href={repo.owner.html_url}>{repo.name}</a>
          </li>
          <li>@{repo.name}</li>
          <li>{repo.stargazers_count} stars</li>
        </ul>
      </li>
    ))}
  </ul>
);

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState(() => ({
      selectedLanguage: language,
      repos: null
    }));

    fetchPopularRepos(language).then(repos => {
      this.setState(() => ({ repos }));
    });

  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {!this.state.repos ? <p>LOADING</p> : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default Popular;
