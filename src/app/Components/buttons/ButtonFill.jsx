import React from 'react'

const ButtonFill = ({title}) => {
  return (
    <div>
    <button className="h-[65px] w-[211px] text-[26px] textOde rounded-full border-4 border-[#001415] bg-[#B58856] text-[#D9D9D9] outline outline-offset-2 outline-1 outline-[#B58856] transform transition-transform duration-500 hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl ">
      {title}
    </button>
  </div>
  )
}

export default ButtonFill
