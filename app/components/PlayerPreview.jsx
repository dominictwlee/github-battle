import React from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = ({ avatar, username, children }) => (
  <div>
    <div className="battle-profile battle-column">
      <img className="battle-profile__avatar" src={avatar} alt={`Avatar for ${username}`} />
      <h2 className="battle-profile__username">@{username}</h2>
      {children}
    </div>
  </div>
);

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default PlayerPreview;
