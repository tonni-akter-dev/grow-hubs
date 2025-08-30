import React from 'react'
import BannerSelling from './BannerSelling'
import BannerDots from './BannerDots';

const Banner = () => {
    return (
        <div className=' bg-[#020E1B] pt-[36px] h-full relative mb-[50px] lg:mb-[90px] overflow-hidden'>
            <div className='flex justify-center'>
                <button className='py-3 px-3.5 bg-[#1B162699] rounded-[100px] text-neutral-50  text-body'> Build for you</button>
            </div>
            <div className='lg:block hidden'>
                <div className="absolute inset-0 bg_rightShadow bg-no-repeat bg-right-top z-0 top-[-45px]"></div>
                <div className="absolute inset-0 bg_leftShadow bg-no-repeat bg-left-top z-0 top-[-65px]"></div>
                <BannerDots />
            </div>
            <div className='text-center lg:px-0 px-5 relative z-40 '>
                <h1 className='text-[36px] lg:text-h1 font-bold  leading-[40px] lg:leading-[80px] banner_heading my-4 '>Built for Creators.  <br /> Powered for Profit </h1>
                <p className='text-body lg:text-h6 text-white leading-[30px] mb-8'>Create and sell courses, consulting services, and communities - with Zero <br className='lg:block hidden' /> marketing cost and a built-in sales network.</p>

                <div className="flex flex-col items-center ">
                    <div className="flex justify-between md:flex-row w-full lg:w-[516px] bg-[#3B3B4B] rounded-[100px] items-center h-[66px] lg:h-[74px]">
                        <input
                            type="email"
                            placeholder="Enter Your Email Here"
                            className="text-[#A6A6A6] w-full lg:w-3/4 p-[25px] focus:outline-0 lg:text-body text-caption "
                        />
                        <button style={{ background: 'linear-gradient(214deg, #3F7DFF 20.22%, #2E9FE5 77.53%)' }}
                            className=" cursor-pointer px-6 me-1 rounded-[100px] h-[58px] lg:h-[66px]  lg:w-[190px]  text-body  text-primary-2-50 font-semibold py-3 hover:from-cyan-600 hover:to-blue-600 transition duration-300 leading-6 ">
                            <p>Start for Free </p>
                            <p className="text-caption font-normal leading-[18px] whitespace-nowrap">No credit card Required</p>
                        </button>
                    </div>
                    <p className="mt-2 text-center text-neutral-5 text-[10px] lg:text-caption ">
                        By proceeding you agree to our Platform terms & Privacy Notice
                    </p>
                </div>
            </div>
            <BannerSelling />
        </div>
    )
}

export default Banner
