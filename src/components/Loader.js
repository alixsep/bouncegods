import React from 'react';
import { BLogo } from '../svg';

import './loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='wrap'>
        <div className='loader-logo'>
          <BLogo />
        </div>
        <div className='text'>Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
