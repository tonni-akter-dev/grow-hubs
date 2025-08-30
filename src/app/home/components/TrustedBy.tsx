import React from 'react'
import Marquee from "react-fast-marquee";
import t1 from '../../../../public/home/t1.png';
import t2 from '../../../../public/home/t2.png';
import t3 from '../../../../public/home/t3.png';
import t4 from '../../../../public/home/t4.png';
import t5 from '../../../../public/home/t5.png';
import t6 from '../../../../public/home/t6.png';
import t7 from '../../../../public/home/t7.png';
import trustedrightshadow from '../../../../public/home/trustedrightshadow.png';
import trustedrleftshadow from '../../../../public/home/trustedrleftshadow.png';
import trustedrleftshadow_sm from '../../../../public/home/trustedrleftshadow_sm.png';
import trustedrightshadow_sm from '../../../../public/home/trustedrightshadow_sm.png';
import Image from 'next/image';

const TrustedBy = () => {
  return (
    <div>
      <p className='text-neutral-9 text-body lg:text-h5 text-center mb-8 '>TRUSTED BY +10,000 CONSULTANTS <br className='lg:hidden block' /> & ORGANISATIONS</p>
      <div className='relative lg:mx-[26px] h-[101px] ps-12 pe-[60px] py-8 bg-[#F6F5F5] lg:rounded-[20px]'>
        <Marquee>
          <div className='flex gap-[51px] items-center'>
            <Image className=' h-[30px] lg:h-10 ' src={t1} alt="" />
            <Image className=' h-[30px] lg:h-10 ' src={t2} alt="" />
            <Image className=' h-[30px] lg:h-10 ' src={t3} alt="" />
            <Image className=' h-[30px] lg:h-10 ' src={t4} alt="" />
            <Image className=' h-[30px] lg:h-10 ' src={t5} alt="" />
            <Image className=' h-[30px] lg:h-10 ' src={t6} alt="" />
            <Image className=' h-[30px] lg:h-10 ' src={t7} alt="" />
          </div>
        </Marquee>
        <div className='absolute right-0 top-0 h-[101px] z-50 w-[91px] lg:w-[290px] '>
          <Image className='rounded-[20px] lg:block hidden' src={trustedrightshadow} alt="" />
          <Image className='rounded-[20px] lg:block hidden' src={trustedrleftshadow_sm} alt="" />
        </div>
        <div className='absolute left-0 top-0 h-[101px] z-50  w-[91px] lg:w-[290px] '>
          <Image className='rounded-[20px] lg:block hidden' src={trustedrleftshadow} alt="" />
          <Image className='lg:hidden block' src={trustedrightshadow_sm} alt="" />
        </div>
      </div>
    </div>
  )
}

export default TrustedBy