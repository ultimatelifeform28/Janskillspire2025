import React from 'react';

const UserProfileInfo = ({ name, bio, avatarUrl }) => {
  return (
    <div>
      <img src={avatarUrl} alt={`${name}'s avatar`} style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfileInfo;