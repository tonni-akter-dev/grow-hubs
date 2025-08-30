import React from 'react'
import service1 from '../../../../public/home/servicehover6.png'
import Image from 'next/image'

const Events = () => {
    return (
        <div className='lg:h-[530px] h-full
        bg-[linear-gradient(358deg,#FDCFBF_1.53%,#1B0902_98.56%)] 
        lg:bg-[linear-gradient(270deg,#FDCFBF_29.3%,#1B0902_98.92%)]
        rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px]
        flex lg:flex-row flex-col justify-between'>

            {/* Left content */}
            <div className='lg:pt-[135px] text-left lg:ps-[96px] p-6'>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px]'>
                    Events
                </h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p>Host online workshops, webinars, or in-person events. Sell tickets, manage registrations, send reminders, and track attendance in real time.</p>
                    <p>Your events become another direct revenue stream while strengthening your brand presence.</p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#FC642C] hover:bg-transparent hover:text-[#FC642C] rounded-[100px] mt-4 border border-[#FC642C] cursor-pointer transition-all ease-in-out duration-300'>
                    Learn More
                </button>
            </div>

            {/* Right image */}
            <div className='relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] section_bg events_bg m-6 lg:m-4 lg:w-[634px]'>
                <Image
                    className='absolute bottom-6 lg:w-full w-[300px]  lg:bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Events
