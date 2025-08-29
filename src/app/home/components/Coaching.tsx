
import React from 'react'
import service1 from '../../../../public/home/servicehover3.png'
import Image from 'next/image'

const Coaching = () => {
    return (
        <div className='h-[530px] bg-[linear-gradient(270deg,_#FDBFBF_29.3%,_#1B0202_98.92%)] rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] flex  justify-between'>
            <div className='pt-[135px] text-left ps-[96px] '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Coaching & Consulting</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p>Offer 1:1 or group sessions with integrated booking, payments, and video tools.  </p>
                    <p>Clients can schedule you directly, and you stay focused on delivering results instead of handling logistics. </p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#D60000] hover:bg-transparent hover:text-[#D60000] rounded-[100px] mt-4 border border-[#D60000] cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>
            <div className='relative rounded-tr-[32px] rounded-tl-[250px] rounded-bl-[250px] rounded-br-[32px] coaching_bg m-4 max-w-[634px] w-full'>
                <Image
                    className='absolute bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Coaching