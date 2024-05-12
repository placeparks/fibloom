"use client"
"use client"

import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import { useViewportScroll } from 'framer-motion';

const Section3 = () => {
  const { scrollY } = useViewportScroll();
  const [scale, setScale] = useState(0.5); // Default scale (for mobile initially)

  useEffect(() => {
    const handleResize = () => {
      // Set initial scale based on screen width when component mounts or screen resizes
      const isMobile = window.innerWidth < 768; // Example breakpoint for mobile
      setScale(isMobile ? 0.5 : 0.1);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Call handleResize initially to set the scale based on the current window size
    handleResize();

    const unsubscribeY = scrollY.onChange((value) => {
      const screenHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const scrolled = value / (docHeight - screenHeight);

      // Adjust scaling based on whether it's mobile or not
      const isMobile = window.innerWidth < 768;
      const dynamicScale = isMobile ? (0.5 + (scrolled * 1.0)) : (0.1 + (scrolled * 1.85));

      setScale(dynamicScale);
    });

    return () => {
      unsubscribeY();
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollY]);

  return (
    <div className='min-h-screen bg-fixed flex flex-col justify-center items-center bg-[#001415]'>
        <div style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease-out' }}>
     
        <Image
  src='/assets/section3/Roadmap.png'
  height={1024}  
  width={1440}
  alt=''
  layout="responsive"  
  className='w-[100vw] md:w-[1440px] h-auto md:h-[1024px]'
/>
        </div>
      </div>
  )
}

export default Section3;
