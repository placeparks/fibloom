"use client"

import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';
import { useViewportScroll } from 'framer-motion';

const Section3 = () => {
  const { scrollY } = useViewportScroll();
  const [scale, setScale] = useState(0.5); // Initial scale when not scrolled

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
    <div className='min-h-screen bg-fixed flex flex-col justify-center items-center bg-[#001415]'>
        <div style={{ transform: `scale(${scale})` }}>
          <Image src='/assets/section3/Roadmap.png' height={1024} width={1440} alt='' layout='fixed' />
        </div>
      </div>
  )
}

export default Section3
