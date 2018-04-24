import React from 'react';
import PropTypes from 'prop-types';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState(() => ({ username: value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }
  render() {
    return (
      <form className="battle-form battle-column" onSubmit={this.handleSubmit}>
        <label className="battle-form__header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          className="battle-form__input"
          id="username"
          placeholder="Github username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <button className="button submit-button--spacing" type="submit" disabled={!this.state.username}>
          Submit
        </button>
      </form>
    );
  }
}

PlayerForm.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PlayerForm;
