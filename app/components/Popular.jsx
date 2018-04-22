const React = require('react');
const PropTypes = require('prop-types');

function SelectLanguage(props) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <nav className="navbar-wrapper">
      <ul className="lang-navbar">
        {languages.map(language => (
          <li
            style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, language)}
            key={language}
            className="lang-nav-item"
          >
            {language}
          </li>
        ))}
      </ul>
    </nav>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState(() => ({
      selectedLanguage: language
    }));
  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
      </div>
    );
  }
}

module.exports = Popular;