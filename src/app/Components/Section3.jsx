"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useViewportScroll } from 'framer-motion';

const Section3 = () => {
  const { scrollY } = useViewportScroll();
  
  // Initialize scale for SSR and default to no scaling on small screens
  const [scale, setScale] = useState(typeof window !== 'undefined' ? (window.innerWidth >= 768 ? 0.1 : 1) : 1);

  useEffect(() => {
    const handleResize = () => {
      // Update the scale immediately based on window size to prevent small initial scale
      setScale(window.innerWidth >= 768 ? 0.1 : 1);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Apply correct scale on initial load

    const unsubscribeY = scrollY.onChange((value) => {
      // Enable scroll animation only on md/lg screens
      if (window.innerWidth >= 768) {
        const screenHeight = window.innerHeight;
        const docHeight = document.body.offsetHeight;
        const scrolled = value / (docHeight - screenHeight);
        const dynamicScale = 0.1 + (scrolled * 1.85);
        setScale(dynamicScale);
      }
    });

    return () => {
      unsubscribeY();
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollY]);

  return (
    <div className='md:min-h-screen bg-fixed flex flex-col justify-center items-center bg-[#001415]'>
      <div style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease-out' }}>
        <Image
          src='/assets/section3/Roadmap.png'
          height={1024}  
          width={1440}
          alt=''
          layout="responsive"  
          className='w-[100%] md:w-[1440px] h-[100%] md:h-[1024px]'
        />
      </div>
    </div>
  );
}

export default Section3;
