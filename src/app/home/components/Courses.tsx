import React from 'react'
import service1 from '../../../../public/home/servicehover1.png'
import Image from 'next/image'

const Courses = () => {
    return (
        <div className='lg:h-[530px] h-full
        bg-[linear-gradient(358deg,#BFDCFD_1.53%,#020E1B_98.56%)] 
        lg:bg-[linear-gradient(270deg,#BFDCFD_29.3%,#020E1B_98.92%)]
         rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px] flex lg:flex-row flex-col  justify-between'>
            <div className='lg:pt-[100px] text-left lg:ps-[96px] p-6 '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Courses</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p className=' '>Turn your knowledge into structured, sellable products. </p>
                    <p>Build online, drip, academic, or challenge-based courses with built-in tools for gamification, accountability, and engagement. </p>
                    <p>Every course is optimized to deliver value and generate recurring income.</p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#1882FB] hover:bg-transparent hover:text-[#1882FB] rounded-[100px] mt-4 border border-[#1882FB] cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>

            <div className='relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] course_bg m-6 lg:m-4 lg:w-[634px] '>
                <Image
                    className='absolute bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Courses