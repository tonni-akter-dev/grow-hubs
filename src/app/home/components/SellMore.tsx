import React from 'react'
import create from '../../../../public/home/create.svg';
import publish from '../../../../public/home/publish.svg';
import connect from '../../../../public/home/connect.svg';
import earn from '../../../../public/home/earn.svg';
import arrowRight from '../../../../public/home/arrowRight.svg';
import arrowRightSm from '../../../../public/home/arrowRightSm.svg';
import arrowRightBottom from '../../../../public/home/arrowRightBottom.svg';
import arrowLeftBottom from '../../../../public/home/arrowLeftBottom.svg';
import arrowLeftBottom_sm from '../../../../public/home/arrowLeftBottom_sm.svg';
import arrowRightBottomsm from '../../../../public/home/arrowRightBottomsm.svg';
import Image from 'next/image';
import SellCard from './SellCard';

const SellMore = () => {
    return (
        <div className='mt-[60px] mx-auto  sell_bg lg:pt-[100px]'  >
            <div className='text-center'>
                <button className='bg-[linear-gradient(91deg,_#CAF0F8_0%,_#87EDDE_100%)] text-[#086D5F] text-body uppercase  font-semibold text-center mb-6 px-3.5 py-3  rounded-[100px] '>CO-sell</button>
                <h1 className='text-h3 lg:text-display text-neutral-13 font-bold leading-[35px] lg:leading-[57px]'>Sell More, Together <br className='lg:hidden block' /> With <br className='lg:block hidden' /> Zero Marketing Costs</h1>
                <p className='text-body-sm lg:text-h6 text-neutral-9 mb-6  font-medium leading-[30px] '>Collaborate with members who promote your <br className='lg:hidden block' /> products to warm <br className='lg:block hidden' /> audiences. Set the split; <br className='lg:hidden block' /> we automate the rest.</p>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[linear-gradient(214deg,_#3F7DFF_20.22%,_#2E9FE5_77.53%)] hover:bg-transparent  rounded-[100px] lg:mt-4 border  cursor-pointer transition-all ease-in-out duration-300 mb-11'>Learn more about Co-Sells</button>
            </div>
            <div className='lg:px-[248px] px-5 pb-[66px]'>
                <div className='flex items-center justify-center  lg:gap-[74px]'>
                    <div className='flex flex-col text-center justify-center  '>
                        <Image className='lg:h-full h-[61px] ' src={create} alt="" />
                        <p className='text-neutral-13 text-[9px] lg:text-h5 font-semibold leading-[38px] '>You create</p>
                    </div>
                    <div>
                        <Image className='lg:block hidden' src={arrowRight} alt="" />
                        <Image className='lg:hidden block' src={arrowRightSm} alt="" />
                    </div>
                    <div className='flex flex-col text-center justify-center '>
                        <Image className='lg:h-full h-[61px] ' src={publish} alt="" />
                        <p className='text-neutral-13 text-[9px] lg:text-h5 font-semibold leading-[38px] '>Publish</p>
                    </div>
                    <div>
                        <Image className='lg:block hidden' src={arrowRight} alt="" />
                        <Image className='lg:hidden block' src={arrowRightSm} alt="" />
                    </div>
                    <div className='flex flex-col text-center justify-center '>
                        <Image className='lg:h-full h-[61px] ' src={connect} alt="" />
                        <p className='text-neutral-13 text-[9px] lg:text-h5 font-semibold leading-[38px] '>We connect</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-[74px] relative'>
                    <div className='absolute left-[53px] md:left-[190px] lg:left-[103px] top-[-13px] md:top-[-9px] lg:top-[10px]'>
                        <Image className='lg:block hidden' src={arrowLeftBottom} alt="" />
                        <Image className='lg:hidden block' src={arrowLeftBottom_sm} alt="" />
                    </div>
                    <div className='flex flex-col  text-center justify-center mt-[26px] lg:mt-[94px] '>
                        <Image className="lg:h-full h-[61px]" src={earn} alt="" />
                        <p className='text-neutral-13 text-[9px] lg:text-h5 font-semibold leading-[38px] '>You Earn</p>
                    </div>
                    <div className='absolute right-[53px] md:right-[192px] lg:right-[103px] top-[-13px] md:top-[-9px] lg:top-[10px]'>
                        <Image className='lg:block hidden' src={arrowRightBottom} alt="" />
                        <Image className='lg:hidden block' src={arrowRightBottomsm} alt="" />
                    </div>
                </div>
            </div>
            <SellCard />
        </div>
    )
}

export default SellMore