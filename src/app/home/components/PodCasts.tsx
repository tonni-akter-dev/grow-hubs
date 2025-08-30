import React from 'react'
import service1 from '../../../../public/home/servicehover5.png'
import Image from 'next/image'

const PodCasts = () => {
    return (
        <div className='lg:h-[530px] h-full
        bg-[linear-gradient(358deg,#FDE9BF_1.53%,#1B1302_98.56%)] 
        lg:bg-[linear-gradient(270deg,#FDE9BF_29.3%,#1B1302_98.92%)]
        rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px]
        flex lg:flex-row flex-col justify-between'>
            
            {/* Left content */}
            <div className='lg:pt-[135px] text-left lg:ps-[96px] p-6'>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px]'>
                    Podcasts
                </h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p>Record, distribute, and monetize your podcast straight from Growhubs.</p>
                    <p>Add paid subscriptions, track listener stats, and promote episodes inside your courses and communities — all in one.</p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#E6AC2E] hover:bg-transparent hover:text-[#E6AC2E] rounded-[100px] mt-4 border border-[#E6AC2E] cursor-pointer transition-all ease-in-out duration-300'>
                    Learn More
                </button>
            </div>

            {/* Right image */}
            <div className='relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] section_bg podcast_bg m-6 lg:m-4 lg:w-[634px]'>
                <Image
                    className='absolute bottom-6 lg:bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default PodCasts
