'use client'
import React, { useState } from 'react'
import BannerMarquee from './BannerMarquee'
import CosellHeroCalculator from './HeroCalculator'

const BannerSelling = () => {
    const [openCalculator, setOpenCalculator] = useState(false);

    const handleCalculatorToggle = () => {
        setOpenCalculator(!openCalculator);
    };

    return (
        <div className="container mt-[37px] lg:mt-[73px] relative z-40 ">
            <div className=' bg-[#00000033] border border-[#505152] rounded-[40px] pt-8  pb-11 mt-[73px]  '>
                <div className='flex justify-between items-start lg:items-center mb-4  ps-4 lg:ps-8 pe-4'>
                    <h3 className=' text-body lg:text-h3 text-white leading-normal font-medium lg:font-semibold '>Sell from day one - even  <br className='lg:hidden block' /> with zero audience</h3>
                    <button className='text-neutral-50  text-body-sm lg:text-body leading-[17px] py-2 lg:py-3 px-4 lg:px-5 border hover:bg-white transition-all ease-in-out duration-300 border-neutral-50 cursor-pointer rounded-[100px]  hover:text-black' onClick={handleCalculatorToggle}>Open calculator</button>
                </div>
                <CosellHeroCalculator openCalculator={openCalculator} />
                <BannerMarquee />
            </div>
        </div>
    )
}

export default BannerSelling