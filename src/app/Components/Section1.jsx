import React from 'react';
import Image from 'next/image';
import Button from './buttons/Button';

const Section1 = () => {
  return (
    <div className='h-screen bgsection1 flex flex-col justify-center items-center gap-20'>
        <Image src='/assets/section1/FB.png' width={300} height={300} alt=''/>
        <Button title='JOIN US' />
    </div>
  );
}

export default Section1;
