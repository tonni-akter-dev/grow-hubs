import React from 'react'
import Marquee from "react-fast-marquee";
import t1 from '../../../../public/home/t1.png'
import t2 from '../../../../public/home/t2.png'
import t3 from '../../../../public/home/t3.png'
import t4 from '../../../../public/home/t4.png'
import t5 from '../../../../public/home/t5.png'
import t6 from '../../../../public/home/t6.png'
import t7 from '../../../../public/home/t7.png'
import trustedrightshadow from '../../../../public/home/trustedrightshadow.png'
import trustedrleftshadow from '../../../../public/home/trustedrleftshadow.png'
import Image from 'next/image';

const TrustedBy = () => {
  return (
    <div className='relative mx-[26px] h-[101px] ps-12 pe-[60px] py-8 bg-[#F6F5F5] rounded-[20px]'>
      <Marquee>
        <div className='flex gap-[51px]  items-center'>
          <Image className='h-10 ' src={t1} alt="" />
          <Image className='h-10 ' src={t2} alt="" />
          <Image className='h-10 ' src={t3} alt="" />
          <Image className='h-10 ' src={t4} alt="" />
          <Image className='h-10 ' src={t5} alt="" />
          <Image className='h-10 ' src={t6} alt="" />
          <Image className='h-10 ' src={t7} alt="" />
        </div>
      </Marquee>
      <div className='absolute right-0 top-0 h-[101px] z-50 w-[290px] '>
        <Image className='rounded-[20px]' src={trustedrightshadow} alt="" />
      </div>
      <div className='absolute left-0 top-0 h-[101px] z-50  w-[290px] '>
        <Image className='rounded-[20px]' src={trustedrleftshadow} alt="" />
      </div>
    </div>
  )
}

export default TrustedBy