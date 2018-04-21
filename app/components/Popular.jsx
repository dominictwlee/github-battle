const React = require('react');

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
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <nav className="navbar-wrapper">
        <ul className="lang-navbar">
          {languages.map(language => (
            <li
              style={language == this.state.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={this.updateLanguage.bind(null, language)}
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
}

module.exports = Popular;
