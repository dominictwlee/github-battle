import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PlayerPreview from './PlayerPreview';
import PlayerForm from './PlayerForm';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerOneImage: null,
      playerTwoName: '',
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = '';
      newState[`${id}Image`] = null;
      return newState;
    });
  }

  render() {
    const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = this.state;
    const { match } = this.props;

    return (
      <div>
        <div className="row">
          {!playerOneName && <PlayerForm id="playerOne" label="Player One" onSubmit={this.handleSubmit} />}

          {playerOneImage !== null && (
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <button className="button button--reset-button" onClick={this.handleReset.bind(null, 'playerOne')}>
                Reset
              </button>
            </PlayerPreview>
          )}

          {!playerTwoName && <PlayerForm id="playerTwo" label="Player Two" onSubmit={this.handleSubmit} />}

          {playerTwoImage !== null && (
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <button className="button button--reset-button" onClick={this.handleReset.bind(null, 'playerTwo')}>
                Reset
              </button>
            </PlayerPreview>
          )}
        </div>

        {playerOneImage &&
          playerTwoImage && (
            <div className="button battle-button-wrapper">
              <Link
                to={{
                  pathname: `${match.url}/results`,
                  search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                }}
              >
                Battle
              </Link>
            </div>
          )}
      </div>
    );
  }
}

export default Battle;
