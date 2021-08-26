import React from 'react';
import Particles from 'react-particles-js';

import './home.scss';

import UserCard from '../components/UserCard';

const Home = () => {
  return (
    <div className='app-route'>
      <div className='logo'>
        <div className='overlay'>Bouncegods</div>
        <Particles
          width='100vw'
          height='100vh'
          params={{
            particles: {
              number: { value: 200, density: { enable: true, value_area: 3000 } },
              color: { value: '#FFFFFF' },
              shape: {
                type: 'polygon',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 },
              },
              opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
              size: { value: 4, random: true, anim: { enable: true, speed: 5, size_min: 0, sync: false } },
              line_linked: { enable: false },
              move: {
                enable: true,
                speed: 1,
                direction: 'top',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: true, rotateX: 600, rotateY: 1200 },
              },
            },
          }}
        />
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
        <UserCard name={'Producer Name'} about={'Producer about and description. Some sample text...'} />
        <UserCard name={'Producer Name'} about={'Producer about and description. Some sample text...'} />
        <UserCard name={'Producer Name'} about={'Producer about and description. Some sample text...'} />
        <UserCard name={'Producer Name'} about={'Producer about and description. Some sample text...'} />
      </div>
      <div className='footer'>
        <div className='group left'>
          <div className='topic'>Topic A</div>
          <a href='/'>Link 1</a>
          <a href='/'>Link 2</a>
          <a href='/'>Link 3</a>
        </div>
        <div className='group middle'>
          <div className='topic'>Topic A</div>
        </div>
        <div className='group right'>
          <div className='topic'>Topic A</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
