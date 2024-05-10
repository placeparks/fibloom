"use client"
import React, { useState } from 'react';

const ButtonFill = ({ title, height, width, fontSize, outline, backgroundColor }) => {
  const buttonStyle = {
    height,
    width,
    fontSize,
    backgroundColor,
    color: '#D9D9D9',
    borderRadius: '9999px', 
    border: '4px solid transparent',
    outline,
    outlineOffset: '4px',
    transition: 'transform 0.5s',
  };

  const [hover, setHover] = useState(false);

  const glowStyle = {
    boxShadow: hover ? '0px 0px 7px 2px #CFA770' : 'none', 
    transition: 'box-shadow 0.5s, transform 0.5s', 
  };
  const combinedStyle = {
    ...buttonStyle, 
    ...glowStyle
  };
  return (
    <div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={combinedStyle} className="textOde hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl">
        {title}
      </button>
    </div>
  );
}

export default ButtonFill;
