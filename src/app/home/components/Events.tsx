import React from 'react'
import service1 from '../../../../public/home/servicehover6.png'
import Image from 'next/image'

const Events = () => {
    return (
        <div className='h-[530px] bg-[linear-gradient(270deg,#FDCFBF_29.3%,#1B0902_98.92%)] rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] flex  justify-between'>
            <div className='pt-[135px] text-left ps-[96px] '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Events</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p>Host online workshops, webinars, or in-person events. Sell tickets, manage registrations, send reminders, and track attendance in real time.  </p>
                    <p>Your events become another direct revenue stream while strengthening your brand presence. </p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#FC642C] hover:bg-transparent hover:text-[#FC642C] rounded-[100px] mt-4 border border-[#FC642C] cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>
            <div className='relative rounded-tr-[32px] rounded-tl-[250px] rounded-bl-[250px] rounded-br-[32px] events_bg m-4 max-w-[634px] w-full'>
                <Image
                    className='absolute bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Events