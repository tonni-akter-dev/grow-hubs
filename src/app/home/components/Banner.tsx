import React from 'react'

const Banner = () => {
    return (
        <div className='bg-[#020E1B] pt-[36px] h-[1000px]'>
            <div className='flex justify-center'>
                <button className='py-3 px-3.5 bg-[#1B162699] rounded-[100px] text-neutral-50  text-body'> Build for you</button>
            </div>
            <div className='text-center'>
                <h1 className='text-h1 font-bold leading-[80px] banner_heading my-4 '>Built for Creators.  <br /> Powered for Profit </h1>
                <p className='text-h6 text-white leading-[30px] mb-8'>Create and sell courses, consulting services, and communities - with Zero <br /> marketing cost and a built-in sales network.</p>

                <div className="flex flex-col items-center ">
                    <div className="flex flex-col justify-between md:flex-row w-full max-w-md md:max-w-lg bg-gray-800  shadow-lg rounded-[100px] items-center overflow-hidden h-[74px]">
                        <input
                            type="email"
                            placeholder="Enter Your Email Here"
                            className="text-[#A6A6A6] w-full md:w-3/4 p-[25px] focus:outline-0 "
                        />
                        <button style={{ background: 'linear-gradient(214deg, #3F7DFF 20.22%, #2E9FE5 77.53%)' }} className="crounded-[100px] m-1 w-[190px]  text-body  text-primary-2-50 font-semibold py-3 hover:from-cyan-600 hover:to-blue-600 transition duration-300 leading-6 ">
                            <p>Start for Free </p>
                            <span className="text-caption leading-[18px]">No credit card Required</span>
                        </button>
                    </div>
                    <p className="mt-2 text-center text-neutral-5 text-caption ">
                       By proceeding you agree to our Platform terms & Privacy Notice
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner
