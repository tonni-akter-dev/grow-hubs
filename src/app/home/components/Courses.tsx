import React from 'react'
import service1 from '../../../../public/home/servicehover1.png'
import Image from 'next/image'

const Courses = () => {
    return (
        <div className='h-[530px] bg-[linear-gradient(270deg,#BFDCFD_29.3%,#020E1B_98.92%)] rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] flex  justify-between'>
            <div className='pt-[100px] text-left ps-[96px] '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Courses</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p className=' '>Turn your knowledge into structured, sellable products. </p>
                    <p>Build online, drip, academic, or challenge-based courses with built-in tools for gamification, accountability, and engagement. </p>
                    <p>Every course is optimized to deliver value and generate recurring income.</p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#1882FB] hover:bg-transparent hover:text-[#1882FB] rounded-[100px] mt-4 border border-[#1882FB] cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>
            <div className='relative rounded-tr-[32px] rounded-tl-[250px] rounded-bl-[250px] rounded-br-[32px] course_bg m-4 max-w-[634px] w-full'>
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