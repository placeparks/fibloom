import React from 'react';

const ButtonFill = ({ title, height, width, fontSize }) => {
  const buttonStyle = {
    height,
    width,
    fontSize,
    backgroundColor: '#B58856',
    color: '#D9D9D9',
    borderRadius: '9999px', 
    border: '4px solid transparent',
    outline: '2px solid #B58856',
    outlineOffset: '4px',
    transition: 'transform 0.5s',
  };

  return (
    <div>
      <button style={buttonStyle} className="textOde hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl">
        {title}
      </button>
    </div>
  );
}

export default ButtonFill;
