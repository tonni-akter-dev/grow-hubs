'use client'
import React from 'react'
import SellCard from './SellCard';
import Lottie from 'lottie-react';
import sellAnimation from "../../utils/sell.json";

const SellMore = () => {

    return (
        <div className='mt-[60px] mx-auto sell_bg '  >
            <div className='text-center'>
                <button className='bg-[linear-gradient(91deg,_#CAF0F8_0%,_#87EDDE_100%)] text-[#086D5F] text-body uppercase  font-semibold text-center mb-6 px-3.5 py-3  rounded-[100px] '>CO-sell</button>
                <h1 className='text-h3 lg:text-display text-neutral-13 font-bold leading-[35px] lg:leading-[57px]'>Sell More, Together <br className='lg:hidden block' /> With <br className='lg:block hidden' /> Zero Marketing Costs</h1>
                <p className='text-body-sm lg:text-h6 text-neutral-9 mb-6  font-medium leading-[30px] '>Collaborate with members who promote your <br className='lg:hidden block' /> products to warm <br className='lg:block hidden' /> audiences. Set the split; <br className='lg:hidden block' /> we automate the rest.</p>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[linear-gradient(214deg,_#3F7DFF_20.22%,_#2E9FE5_77.53%)] hover:bg-transparent  rounded-[100px] lg:mt-4 border  cursor-pointer transition-all ease-in-out duration-300'>Learn more about Co-Sells</button>
            </div>
            <div className="mt-[-150px]">
                <Lottie animationData={sellAnimation} />
            </div>
            <SellCard />
        </div>
    )
}

export default SellMore