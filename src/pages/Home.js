import React from 'react';

import './home.scss';

import UserCard from '../components/UserCard';

const Home = () => {
  return (
    <div className='app-route'>
      <div className='logo'>
        <div className='overlay'>Bouncegods</div>
      </div>
      <div className='about'>
        <div className='before'>Welcome to Bouncegods</div>
        <div className='group left-to-right'>
          {/* <img className='image' src='' alt=' ' /> */}
          <div className='image' />
          <div className='text'>
            <div className='topic'>Who are we?</div>
            <div className='description'>
              Bouncegods™ is a music label and group founded by sacred and bvng looking to excel primarily in the bounce
              community whilst helping it grow. our main focus is to help talented producers' songs to be reached out to
              people and we like to keep promoting fresh tunes and uptodate music.
            </div>
          </div>
        </div>
        <div className='group right-to-left'>
          {/* <img className='image' src='' alt=' ' /> */}
          <div className='image' />
          <div className='text'>
            <div className='topic'>What is bounce?</div>
            <div className='description'>
              Bounce is a new upcoming genre in the underground scene which has the potential to be popular in mainstream era as well.
              Bounce is a subgenre of EDM and some of the elements are inspired by Trap genre.
            </div>
          </div>
        </div>
        <div className='after'>Owners</div>
      </div>
      <div className='owners'>
        <UserCard name={'Prod. Sacred'} about={'Producer about and description. Some sample text...'} />
        <UserCard name={'Prod. Bvng'} about={'Producer about and description. Some sample text...'} />
      </div>
      <div className='footer'>
        <div className='group left'>
          <div className='topic'>Contact us</div>
          <a className="link" href='/'>Link 1</a>
          <a className="link" href='/'>Link 2</a>
          <a className="link" href='/'>Link 3</a>
        </div>
        <div className='group middle'>
          <div className='topic'>Topic B</div>
          <a className="link" href='/'>Link 4</a>
          <a className="link" href='/'>Link 5</a>
          <a className="link" href='/'>Link 6</a>
        </div>
        <div className='group right'>
          <div className='topic'>Topic A</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
