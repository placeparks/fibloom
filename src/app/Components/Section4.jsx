import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <div className='bgsection4'>
       <div className='blob4'></div>
          <div className='blob5'></div>
          
          <div className='relative flex justify-center items-center z-10'>
  <Image src='/assets/section4/Paper.png' width={1496} height={1064} alt='' />
  <h1 className='textOde absolute text-[#001415] text-8xl' style={{ top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>DASHBOARD</h1>
</div>

    </div>
  )
}

export default Section3
