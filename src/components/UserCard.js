import React from 'react';

import './userCard.scss';

const UserCard = ({ name, about }) => {
  return (
    <div className='user-card'>
      {/* <img className='image' src='' alt=' ' /> */}
      <div className='image' />
      <div className='description'>
          <div className="name topic">{name}</div>
          <div className="about">{about}</div>
      </div>
    </div>
  );
};

export default UserCard;
