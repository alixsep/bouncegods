import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

import './home.scss';

import UserCard from '../components/UserCard';
import {
  AlixsepLogo,
  AtomLogo,
  BLogo,
  BouncegodsLogo,
  DiscordLogo,
  HomepageScene,
  InstagramLogo,
  Mail,
  SoundCloudLogo,
  YoutubeLogo,
} from '../svg';

import sacred from '../images/sacred-pfp.jpg';
import bvng from '../images/bvng-pfp.jpg';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const appRef = useRef();
  const q = gsap.utils.selector(appRef);

  useLayoutEffect(() => {
    // Setup
    const scroller = document.querySelector('.app-route');

    const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true });
    bodyScrollBar.track.xAxis.element.remove();
    // Scrollbar.detachStyle()

    ScrollTrigger.scrollerProxy('.app-route', {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });

    // 1. Scene
    let tl_scene = gsap.timeline({
      // scrollTrigger: { trigger: q('.logo'), start: 'top bottom' },
      defaults: { duration: 1, ease: 'power4.easeOut' },
    });
    tl_scene
      .from(q('.homepage-scene'), {
        opacity: 0,
        scale: 2,
        duration: 4,
      })
      .from(
        q('.homepage-scene .layer_5'),
        {
          y: '50px',
          x: '-400px',
          scaleY: 3,
          opacity: 0,
          duration: 4,
        },
        '-=3'
      )
      .from(
        q('.homepage-scene .layer_4'),
        {
          y: '50px',
          opacity: 0,
        },
        '-=4'
      )
      .from(
        q('.homepage-scene .layer_3'),
        {
          y: '100px',
          opacity: 0,
        },
        '-=4'
      )
      .from(
        q('.homepage-scene .layer_2'),
        {
          y: '150px',
          opacity: 0,
        },
        '-=4'
      )
      .from(
        q('.homepage-scene .layer_1'),
        {
          y: '200px',
          opacity: 0,
          overwrite: 'auto',
        },
        '-=4'
      )
      .from(
        q('.homepage-scene .sky-stars'),
        {
          opacity: 0,
          duration: 5,
          scale: 1.5,
          stagger: {
            each: 0.1,
            grid: 'auto',
            ease: 'none',
          },
        },
        '-=5'
      );
    gsap.from(q('.bouncegods-logo'), {
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: 'power4.easeOut',
    });
    gsap.to(q('.parallax-bg'), {
      scrollTrigger: {
        scrub: 0.5,
      },
      y: (i, target) => `+=${-ScrollTrigger.maxScroll(scroller) * target.dataset.speed}`,
      ease: 'power4.out',
    });
    // 2. Welcome
    let tl_welcome = gsap.timeline({
      scrollTrigger: { trigger: q('.about'), start: '20% bottom' },
      defaults: { duration: 2, ease: 'power4.easeOut' },
    });
    tl_welcome.from(q('.about .ab_el'), {
      y: '40px',
      opacity: 0,
      stagger: {
        each: 0.1,
        grid: 'auto',
        ease: 'none',
      },
    });

    // X. Footer
    let tl_footer = gsap.timeline({
      scrollTrigger: { trigger: q('.footer'), start: 'top bottom' },
      defaults: { duration: 0.5, ease: 'power4.easeOut' },
    });
    tl_footer
      .from(
        q('.footer .group .link'),
        {
          x: '-20px',
          stagger: {
            each: 0.05,
            grid: 'auto',
            ease: 'power4.Out',
          },
        },
        '-=.2'
      )
      .from(
        q('.discord_el'),
        {
          y: '40px',
          opacity: 0,
          stagger: {
            each: 0.1,
            ease: 'none',
          },
        },
        '-=1'
      );
    // Y. Copyright
    let tl_copyright = gsap.timeline({
      scrollTrigger: { trigger: q('.copyright'), start: '20% bottom' },
      defaults: { duration: 0.5, ease: 'power4.easeOut' },
    });
    tl_copyright.from(q('.cp_el'), {
      opacity: 0,
      x: '-20px',
      stagger: {
        each: 0.25,
        // grid: 'auto',
        ease: 'power4.out',
      },
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div className='app-route' ref={appRef}>
      <div className='logo'>
        <div className='overlay'>
          <BouncegodsLogo />
        </div>
        <div className='background'>
          <HomepageScene />
        </div>
      </div>
      <div className='about'>
        <div className='before'>Welcome to Bouncegods</div>
        <div className='group ab_el left-to-right'>
          {/* <img className='image' src='' alt=' ' /> */}
          <div className='image ab_el'>
            <BLogo />
          </div>
          <div className='text'>
            <div className='topic ab_el'>Who are we?</div>
            <div className='description ab_el'>
              Bouncegods™ is a music label and group founded by sacred and bvng looking to excel primarily in the bounce
              community whilst helping it grow. our main focus is to help talented producers' songs to be reached out to
              people and we like to keep promoting fresh tunes and up-to-date music.
            </div>
          </div>
        </div>
        <div className='group ab_el right-to-left'>
          {/* <img className='image' src='' alt=' ' /> */}
          <div className='image ab_el'>
            <AtomLogo />
          </div>
          <div className='text'>
            <div className='topic ab_el'>What is bounce?</div>
            <div className='description ab_el'>
              Bounce is a new upcoming genre in the underground scene which has the potential to be popular in
              mainstream era as well. Bounce is a subgenre of EDM and some of the elements are inspired by Trap genre.
            </div>
          </div>
        </div>
        <div className='after'>Owners</div>
      </div>
      <div className='owners'>
        <UserCard
          name={'Prod. Sacred'}
          about={`${Math.floor(
            (new Date() - new Date('2006-11-20').getTime()) / 3.15576e10
          )} year old multi-genre producer from germany`}
          src={sacred}
        />
        <UserCard name={'Prod. Bvng'} about={'co owner of the label, active producer'} src={bvng} />
      </div>
      <div className='footer'>
        <div className='group left'>
          <div className='topic'>Our Socials</div>
          <a className='link' href='https://soundcloud.com/bouncegods'>
            <div className='icon'>
              <SoundCloudLogo />
            </div>
            SoundCloud
          </a>
          <a className='link' href='https://www.instagram.com/bounce.gods/'>
            <div className='icon'>
              <InstagramLogo />
            </div>
            Instagram
          </a>
          <a className='link' href='https://www.youtube.com/c/bouncegods/featured'>
            <div className='icon'>
              <YoutubeLogo />
            </div>
            Youtube
          </a>
        </div>
        <div className='group middle discord_el'>
          <div className='pic discord_el'></div>
          <div className='description-wrapper'>
            <div className='discord  discord_el'>
              <DiscordLogo />
            </div>
            <a href='https://discord.com/invite/vGk8vDdCAS' className='text discord_el'>
              Join our discord server!
            </a>
            <div className='members'>
              <div className='member a discord_el'>
                <DiscordLogo />
              </div>
              <div className='member b discord_el'>
                <DiscordLogo />
              </div>
              <div className='member c discord_el'>
                <DiscordLogo />
              </div>
            </div>
          </div>
        </div>
        <div className='group right'>
          <div className='topic'>Contact us</div>
          <a className='link' href='mailto:bouncegods.io@gmail.com'>
            <div className='icon'>
              <Mail />
            </div>
            Email
          </a>
          <a className='link' href='https://soundcloud.com/bvngmusic'>
            <div className='icon'>
              <SoundCloudLogo />
            </div>
            bvng
          </a>
          <a className='link' href='https://soundcloud.com/sacred555'>
            <div className='icon'>
              <SoundCloudLogo />
            </div>
            sacred
          </a>
        </div>
      </div>
      <div className='copyright'>
        <span className='cp_el'>Copyright {new Date().getFullYear().toString()}</span>
        <span className='cp_el'>{' ☆.｡.:*༓☾ '}</span>
        <span className='cp_el'>Bouncegods™</span>
        <div className='alixsep-logo'>
          <div className='cp_el'>Designed by</div>
          <div className='cp_el'>
            <AlixsepLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
