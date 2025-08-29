import React from 'react'
import service1 from '../../../../public/home/servicehover4.png'
import Image from 'next/image'

const Merchandise = () => {
    return (
        <div className='h-[530px] bg-[linear-gradient(270deg,_#E3FDBF_29.3%,_#111B02_98.92%)] rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] flex  justify-between'>
            <div className='pt-[123px] text-left ps-[96px] '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Merchandise</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p>Sell digital products (ebooks, templates, guides) or physical items (books, branded gear) without leaving the platform.  </p>
                    <p>Your merchandise integrates directly with your courses, communities, and events — creating upsell and bundle opportunities. </p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#6EB50B] hover:bg-transparent hover:text-[#6EB50B] rounded-[100px] mt-4 border border-[#6EB50B] cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>
            <div className='relative rounded-tr-[32px] rounded-tl-[250px] rounded-bl-[250px] rounded-br-[32px] merchandise_bg m-4 max-w-[634px] w-full'>
                <Image
                    className='absolute bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Merchandise