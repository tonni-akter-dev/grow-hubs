import React from 'react'
import service1 from '../../../../public/home/servicehover3.png'
import Image from 'next/image'

const Coaching = () => {
    return (
        <div className='lg:h-[530px] h-full
        bg-[linear-gradient(358deg,#FDBFBF_1.53%,#1B0202_98.56%)] 
        lg:bg-[linear-gradient(270deg,#FDBFBF_29.3%,#1B0202_98.92%)]
        rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px] 
        flex lg:flex-row flex-col justify-between'>
            
            {/* Left content */}
            <div className='lg:pt-[135px] text-left lg:ps-[96px] p-6'>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px]'>
                    Coaching & Consulting
                </h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p>Offer 1:1 or group sessions with integrated booking, payments, and video tools.</p>
                    <p>Clients can schedule you directly, and you stay focused on delivering results instead of handling logistics.</p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#D60000] hover:bg-transparent hover:text-[#D60000] rounded-[100px] mt-4 border border-[#D60000] cursor-pointer transition-all ease-in-out duration-300'>
                    Learn More
                </button>
            </div>

            {/* Right image */}
            <div className='relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] section_bg coaching_bg m-6 lg:m-4 lg:w-[634px]'>
                <Image
                    className='absolute bottom-6 lg:bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Coaching
