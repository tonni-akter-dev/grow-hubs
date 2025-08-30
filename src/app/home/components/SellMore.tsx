import React from 'react'
import create from '../../../../public/home/create.svg';
import publish from '../../../../public/home/publish.svg';
import connect from '../../../../public/home/connect.svg';
import earn from '../../../../public/home/earn.svg';
import arrowRight from '../../../../public/home/arrowRight.svg';
import arrowRightBottom from '../../../../public/home/arrowRightBottom.svg';
import arrowLeftBottom from '../../../../public/home/arrowLeftBottom.svg';
import Image from 'next/image';
import SellCard from './SellCard';

const SellMore = () => {
    return (
        <div className='mt-[60px] mx-auto  sell_bg pt-[100px]'  >
            <div className='text-center'>
                <button className='bg-[linear-gradient(91deg,_#CAF0F8_0%,_#87EDDE_100%)] text-[#086D5F] text-body uppercase  font-semibold text-center mb-6 px-3.5 py-3  rounded-[100px] '>CO-sell</button>
                <h1 className='text-display text-neutral-13 font-bold leading-[57px]'>Sell More, Together With <br /> Zero Marketing Costs</h1>
                <p className='text-h6 text-neutral-9 mb-6  font-medium leading-[30px] '>Collaborate with members who promote your products to warm <br /> audiences. Set the split; we automate the rest.</p>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[linear-gradient(214deg,_#3F7DFF_20.22%,_#2E9FE5_77.53%)] hover:bg-transparent  rounded-[100px] mt-4 border  cursor-pointer transition-all ease-in-out duration-300 mb-11'>Learn more about Co-Sells</button>
            </div>
            <div className='lg:px-[248px]  pb-[66px]'>
                <div className='flex items-center justify-center gap-[74px]'>
                    <div className='flex flex-col text-center justify-center  '>
                        <Image src={create} alt="" />
                        <p className='text-neutral-13 text-h5 font-semibold leading-[38px] '>You create</p>
                    </div>
                    <div>
                        <Image src={arrowRight} alt="" />
                    </div>
                    <div className='flex flex-col text-center justify-center '>
                        <Image src={publish} alt="" />
                        <p className='text-neutral-13 text-h5 font-semibold leading-[38px] '>Publish</p>
                    </div>
                    <div>
                        <Image src={arrowRight} alt="" />
                    </div>
                    <div className='flex flex-col text-center justify-center '>
                        <Image src={connect} alt="" />
                        <p className='text-neutral-13 text-h5 font-semibold leading-[38px] '>We connect</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-[74px] relative'>
                    <div className='absolute left-[103px] top-[10px]'>
                        <Image src={arrowLeftBottom} alt="" />
                    </div>
                    <div className='flex flex-col  text-center justify-center mt-[94px] '>
                        <Image src={earn} alt="" />
                        <p className='text-neutral-13 text-h5 font-semibold leading-[38px] '>You Earn</p>
                    </div>
                    <div className='absolute right-[103px] top-[10px]'>
                        <Image src={arrowRightBottom} alt="" />
                    </div>

                </div>
            </div>

            <SellCard />
        </div>
    )
}

export default SellMore