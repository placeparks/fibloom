"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useViewportScroll } from 'framer-motion';

const Section3 = () => {
  const { scrollY } = useViewportScroll();
  // Initialize scale safely for SSR
  const [scale, setScale] = useState(typeof window !== 'undefined' ? (window.innerWidth < 768 ? 0.5 : 0.1) : 0.1);

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
        const isMobile = window.innerWidth < 768;
        const dynamicScale = isMobile ? (0.5 + (scrolled * 1.0)) : (0.1 + (scrolled * 1.85));

        setScale(dynamicScale);
      });

      return () => {
        unsubscribeY();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [scrollY]);

  return (
    <div className='mt-[-35%] md:mt-0 min-h-screen bg-fixed flex flex-col justify-center items-center bg-[#001415]'>
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
  );
}

export default Section3;
