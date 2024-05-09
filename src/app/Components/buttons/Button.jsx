import React from 'react'

const Button = ({title}) => {
  return (
<div>
  <button className="h-[65px] w-[211px] text-[26px] textOde rounded-full border-4 border-[#282828] bg-[#D9D9D9] text-[#282828] outline outline-offset-2 outline-1 outline-[#D9D9D9] transform transition-transform duration-500 hover:scale-105 hover:text-[29px] relative overflow-hidden shadow-none hover:shadow-xl ">
    {title}
  </button>
</div>

  
  )
}

export default Button
