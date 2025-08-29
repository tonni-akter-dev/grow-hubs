import React from 'react'
import service1 from '../../../../public/home/servicehover5.png'
import Image from 'next/image'

const PodCasts = () => {
    return (
        <div className='h-[530px] bg-[linear-gradient(270deg,_#FDE9BF_29.3%,_#1B1302_98.92%)] rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] flex  justify-between'>
            <div className='pt-[135px] text-left ps-[96px] '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Podcasts</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p className=' '>Record, distribute, and monetize your podcast straight from Growhubs.</p>
                    <p>Add paid subscriptions, track listener stats, and promote episodes inside your courses and communities — all in one  </p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#E6AC2E] hover:bg-transparent hover:text-[#E6AC2E] rounded-[100px] mt-4 border border-[#E6AC2E] cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>
            <div className='relative rounded-tr-[32px] rounded-tl-[250px] rounded-bl-[250px] rounded-br-[32px] podcast_bg m-4 max-w-[634px] w-full'>
                <Image
                    className='absolute bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default PodCasts