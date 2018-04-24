import React from 'react';
import PropTypes from 'prop-types';
import fetchPopularRepos from '../utils/api';

const SelectLanguage = ({ selectedLanguage, onSelect }) => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <nav className="navbar-wrapper">
      <ul className="langs-nav">
        {languages.map(language => (
          <li key={`${language}-li`} className="langs-nav__item">
            <button
              style={language === selectedLanguage ? { color: '#ba2632' } : null}
              onClick={() => onSelect(language)}
              key={language}
            >
              {language}
            </button>
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
        <h1 className="profile-rank">#{index + 1}</h1>
        <ul className="profile-details">
          <li className="profile-details--spacing">
            <img className="profile-details__avatar" src={repo.owner.avatar_url} alt={`Avatar for ${repo.name}`} />
          </li>
          <li className="profile-details--spacing">
            <a href={repo.owner.html_url}>{repo.name}</a>
          </li>
          <li className="profile-details--spacing">@{repo.owner.login}</li>
          <li className="profile-details--spacing">{repo.stargazers_count} stars</li>
        </ul>
      </li>
    ))}
  </ul>
);

RepoGrid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
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
      <div className="popular-body">
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {!this.state.repos ? <p>LOADING</p> : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default Popular;
