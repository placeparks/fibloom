"use client"
import React, { useState } from 'react';

const Button = ({ title }) => {
  const [hover, setHover] = useState(false);

  const glowStyle = {
    boxShadow: hover ? '0 2px 10px 2px #E4E4E4' : 'none', 
    transition: 'box-shadow 0.5s, transform 0.5s', 
  };
  return (
<div>
      <button
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
           style={glowStyle} 
        className="md:h-[65px] h-[43px] w-[115px] md:w-[211px] md:text-[26px] textOde rounded-full border-4 border-[#282828] bg-[#D9D9D9] text-[#282828] outline outline-offset-2 outline-1 outline-[#D9D9D9] transform transition-transform duration-500 hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl ">
    {title}
  </button>
</div>

  
  )
}

export default Button
