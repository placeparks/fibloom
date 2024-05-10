"use client"

import Image from 'next/image'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useViewportScroll } from 'framer-motion';
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const { scrollY } = useViewportScroll();
  const [scale, setScale] = useState(0.5); 
  const [hover, setHover] = useState(false);

  const glowStyle = {
    boxShadow: hover ? '0 2px 10px 2px #E4E4E4' : 'none', 
    transition: 'box-shadow 0.5s, transform 0.5s', 
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    // Ensure the element exists and is not null
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current, 
        { autoAlpha: 0, y: 40 }, 
        {
          duration: 1,
          delay: 0.3,
          autoAlpha: 1,
          y: 0,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top bottom+=200", 
            end: "center center",
            toggleActions: 'play none none none',
          }
        });
    }
  }, []);



  useEffect(() => {
    const unsubscribeY = scrollY.onChange((value) => {
      const screenHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const scrolled = value / (docHeight - screenHeight);
      const dynamicScale = 0.5 + (scrolled * (1 - 0.5));

      // Set scale to 1.0 if the scroll percentage is above 80%
      if (scrolled > 0.8) {
        setScale(1.0);
      } else {
        setScale(dynamicScale);
      }
    });

    return () => unsubscribeY();
  }, [scrollY]);
  return (
    <div className='bgsection4'>
    <div className='blob4'></div>
    <div className='blob5'></div>

      <div className='relative flex justify-center items-center z-10'>
      <div style={{ transform: `scale(${scale})` }}>
        <Image src='/assets/section4/Paper.png' width={1496} height={1064} alt='' />
        <div className="absolute" style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="flex items-center flex-col space-y-60">  
                <h1 className='textOde text-[#001415] text-[95.01px]'>DASHBOARD</h1>
                <button
        ref={buttonRef}
        id='btn'
        className="h-[65px] w-[211px] text-[26px] textOde rounded-full border-4 border-[#D9D9D9] bg-[#282828] text-[#D9D9D9] outline outline-offset-2 outline-1 outline-[#282828] transform transition-transform duration-500 hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl opacity-0"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={glowStyle} 
      >
        JOIN US
      </button>
            </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Section4
