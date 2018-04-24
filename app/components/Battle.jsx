import React from 'react';

import PlayerForm from './PlayerForm';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: null,
      playerOneImage: null,
      playerTwoName: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com${username}.png?size=200`;
      return newState;
    });
  }

  render() {
    const { playerOneName, playerTwoName } = this.state;
    return (
      <div>
        <div className="row">
          {!playerOneName && <PlayerForm id="playerOne" label="Player One" onSubmit={this.handleSubmit} />}

          {!playerTwoName && <PlayerForm id="playerTwo" label="Player Two" onSubmit={this.handleSubmit} />}
        </div>
      </div>
    );
  }
}

export default Battle;
