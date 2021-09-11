import React from 'react';

import './userCard.scss';

const UserCard = ({ name, about, src }) => {
  return (
    <div className='user-card'>
      <img className='image' src={src} alt={`${name}-pfp`} />
      <div className='description'>
          <div className="name topic">{name}</div>
          <div className="about-text">{about}</div>
      </div>
    </div>
  );
};

export default UserCard;
