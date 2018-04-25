import React from 'react';
import PropTypes from 'prop-types';

class ResetButton extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.handleReset(this.props.id);
  }

  render() {
    return (
      <button className="button button--reset-button" onClick={this._onClick}>
        Reset
      </button>
    );
  }
}

ResetButton.propTypes = {
  handleReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default ResetButton;
