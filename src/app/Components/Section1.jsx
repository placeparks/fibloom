"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './buttons/Button';

const Section1 = () => {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {

        const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      if (scrollPosition >= screenHeight / 4) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };
      }
      

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-[90vh] md:h-[100vh] bg-contain md:bg-cover bgsection1 bg-fixed flex flex-col justify-center items-center gap-4 md:gap-10 ${blur ? 'blur-effect' : ''}`}>
        <Image src='/assets/section1/FB.png' width={491} height={215} alt='' className='md:h-[215px] md:w-[491px] h-[80px] w-[160px]'/>
       <Button title='JOIN US' />
    </div>
  );
}

export default Section1;
