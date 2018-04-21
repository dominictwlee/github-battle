const React = require('react');
const Popular = require('./Popular.jsx');

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

module.exports = App;
