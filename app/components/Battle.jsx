import React from 'react';
import PropTypes from 'prop-types';

import PlayerForm from './PlayerForm';

const PlayerPreview = ({ avatar, username, id, onReset }) => (
  <div>
    <div className="battle-profile battle-column">
      <img className="battle-profile__avatar" src={avatar} alt={`Avatar for ${username}`} />
      <h2 className="battle-profile__username">@{username}</h2>
      <button className="button button--reset-button" onClick={() => onReset(id)}>
        Reset
      </button>
    </div>
  </div>
);

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

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
    this.handleReset = this.handleReset.bind(this);
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
    return (
      <div>
        <div className="row">
          {!playerOneName && <PlayerForm id="playerOne" label="Player One" onSubmit={this.handleSubmit} />}

          {playerOneImage !== null && (
            <PlayerPreview avatar={playerOneImage} username={playerOneName} onReset={this.handleReset} id="playerOne" />
          )}

          {playerTwoImage !== null && (
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName} onReset={this.handleReset} id="playerTwo" />
          )}

          {!playerTwoName && <PlayerForm id="playerTwo" label="Player Two" onSubmit={this.handleSubmit} />}
        </div>
      </div>
    );
  }
}

export default Battle;
