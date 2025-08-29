import { stats } from '@/app/utils/data'
import React from 'react'
import Stats from './Stats'
import BannerMarquee from './BannerMarquee'

const BannerSelling = () => {
    return (
        <div className="container mt-[73px]">
            <div className=' bg-[#00000033] border border-[#505152] rounded-[40px] pt-8  pb-11   '>
                <div className='flex justify-between items-center mb-[58px] ps-8 pe-4'>
                    <h3 className='text-h3 text-white leading-normal font-semibold'>Sell from day one - even with zero audience</h3>
                    <button className='text-neutral-50 text-body leading-[17px] py-3 px-5 border hover:bg-white transition-all ease-in-out duration-300 border-neutral-50 rounded-[100px]  hover:text-black'>Open calculator</button>
                </div>
                <Stats />
                <BannerMarquee />
            </div>

        </div>
    )
}

export default BannerSelling