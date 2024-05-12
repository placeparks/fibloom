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
  const [scale, setScale] = useState(typeof window !== 'undefined' ? (window.innerWidth < 768 ? 0.5 : 0.1) : 0.1);  const [hover, setHover] = useState(false);

  const glowStyle = {
    boxShadow: hover ? '0 2px 10px 2px #E4E4E4' : 'none', 
    transition: 'box-shadow 0.5s, transform 0.5s', 
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      console.log("Animating element:", buttonRef.current);
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top bottom", 
          end: "top center",   
          toggleActions: 'play none none none',
        }
      });
  
      tl.fromTo(buttonRef.current, 
        { autoAlpha: 0, y: 40 }, 
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power1.inOut",
        });
  
    } else {
      console.error("Ref is not attached to an element.");
    }
  }, []);
  

  useEffect(() => {
    if (typeof window !== 'undefined') {

      const handleResize = () => {
        const isMobile = window.innerWidth < 768;
        setScale(isMobile ? 0.5 : 0.1);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

    const unsubscribeY = scrollY.onChange((value) => {
      const screenHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const scrolled = value / (docHeight - screenHeight);

      // Adjust scaling based on whether it's mobile or not
      const isMobile = window.innerWidth < 768;
      const dynamicScale = isMobile ? (0.5 + (scrolled * 1.2)) : (0.1 + (scrolled * 1.50));

      setScale(dynamicScale);
    });

    return () => {
        unsubscribeY();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [scrollY]);

  return (
    <div className='bgsection4 md:mt-32 mt-[-35%]'>
    <div className='blob4 hidden md:block'></div>
    <div className='blob5 hidden md:block'></div>

      <div className='relative flex justify-center items-center z-10'>
      <div style={{ transform: `scale(${scale})` }}>
        <Image src='/assets/section4/Paper.png' width={1440} height={1024} alt='' 
  layout="responsive"  
  className='w-[100vw] md:w-[1440px] h-auto md:h-[1024px]' />
        <div className="absolute" style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="flex items-center flex-col space-y-[35px] md:space-y-60">  
                <h1 className='textOde text-[#001415] text-[35px] md:text-[95.01px]'>DASHBOARD</h1>
                <button
        ref={buttonRef}
        id='btn'
        className=" h-[30px] w-[120px] md:h-[65px] md:w-[211px] md:text-[26px] textOde rounded-full border-2 md:border-4 border-[#D9D9D9] bg-[#282828] text-[#D9D9D9] outline outline-offset-1 md:outline-offset-2 outline-1 outline-[#282828] transform transition-transform duration-500 hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl opacity-0"
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
