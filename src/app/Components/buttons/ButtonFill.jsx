"use client"
import React, { useState, useEffect } from 'react';

const ButtonFill = ({ title, height, width, fontSize, outline, backgroundColor, glowColor }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      if (typeof window !== 'undefined') {
          const handleResize = () => {
              setIsMobile(window.innerWidth < 768);
          };
  
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
      }
  }, []);
  

  const mobileStyle = {
    height: '40px',  // Example mobile height
    width: '120px',  // Example mobile width
    fontSize: '20px', // Example mobile font size
  };

  const desktopStyle = {
    height,  // Passed-in height for desktop
    width,   // Passed-in width for desktop
    fontSize, // Passed-in fontSize for desktop
  };

  const buttonStyle = isMobile ? mobileStyle : desktopStyle;

  // Extend the basic style with background and border properties
  const extendedButtonStyle = {
    ...buttonStyle,
    backgroundColor,
    color: '#D9D9D9',
    borderRadius: '9999px',
    outline,
    transition: 'transform 0.5s',
  };

  const [hover, setHover] = useState(false);

  const glowStyle = {
    boxShadow: hover ? `0px 0px 7px 2px ${glowColor}`: 'none',
    transition: 'box-shadow 0.5s, transform 0.5s',
  };

  const combinedStyle = {
    ...extendedButtonStyle, 
    ...glowStyle
  };

  return (
    <div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={combinedStyle} className="textOde outline-offset-2 md:outline-offset-4 outline-1 border-2 md:border-4 border-transparent hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl">
        {title}
      </button>
    </div>
  );
}

export default ButtonFill;
