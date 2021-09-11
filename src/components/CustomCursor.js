import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './customCursor.scss';

const CustomCursor = () => {
//   const cursorRef = useRef();
  const follower1Ref = useRef();
//   const follower2Ref = useRef();

  useEffect(() => {
    // gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(follower1Ref.current, { xPercent: -50, yPercent: -50 });
    // gsap.set(follower2Ref.current, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', (e) => {
    //   gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.4 });
      gsap.to(follower1Ref.current, { x: e.clientX, y: e.clientY, duration: 0.6 });
    //   gsap.to(follower2Ref.current, { x: e.clientX, y: e.clientY, duration: 0.8 });
    });

    return () => {
      window.removeEventListener('mousemove');
    };
  }, []);

  return (
    <>
      {/* <div ref={cursorRef} className='cursor'></div> */}
      <div ref={follower1Ref} className='follower1'></div>
      {/* <div ref={follower2Ref} className='follower2'></div> */}
    </>
  );
};

export default CustomCursor;
