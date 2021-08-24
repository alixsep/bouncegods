import React from 'react';
import UserCard from '../components/UserCard';

import './home.scss';

const Home = () => {
  return (
    <div className='app-route'>
      <div className='three'>Bouncegods logo</div>
      <div className='about'>
        <div className='before'>Welcome to Bouncegods</div>
        <div className='group left-to-right'>
          {/* <img className='image' src='' alt=' ' /> */}
          <div className='image' />
          <div className='text'>
            <div className='topic'>Topic A</div>
            <div className='description'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, perferendis nostrum quod repudiandae
              odit minus dolorum distinctio ab natus. Reprehenderit minima omnis voluptatibus non est ipsa fuga fugiat
              aliquam recusandae!
            </div>
          </div>
        </div>
        <div className='group right-to-left'>
          {/* <img className='image' src='' alt=' ' /> */}
          <div className='image' />
          <div className='text'>
            <div className='topic'>Topic B</div>
            <div className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos totam adipisci magni tempora
              recusandae eligendi aliquid corporis. Laborum iste eveniet amet ipsa. Numquam, inventore. Mollitia
              excepturi sed sequi assumenda?
            </div>
          </div>
        </div>
        <div className='after'>Owners</div>
      </div>
      <div className='owners'>
        <UserCard name={'Producer Name'} />
        <UserCard name={'Producer Name'} />
        <UserCard name={'Producer Name'} />
        <UserCard name={'Producer Name'} />
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default Home;
