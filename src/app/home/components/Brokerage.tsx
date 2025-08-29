import React from 'react'
import service1 from '../../../../public/home/servicehover7.png'
import Image from 'next/image'

const Brokerage = () => {
    return (
        <div className='h-[530px] bg-[linear-gradient(270deg,#BFFDF5_29.3%,#021B18_98.92%)]  rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] flex  justify-between'>
            <div className='pt-[87px] text-left ps-[96px] '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Brokerage</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p>A unique Growhubs feature: earn money by mediating deals.  </p>
                    <p>Connect creators, clients, and products across the platform, and earn a commission for enabling sales.  </p>
                    <p>Brokerage transforms your network into a powerful asset — even when you’re not selling your own products.</p>
                </div>
                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#1DB9A3] hover:bg-transparent hover:text-[#1DB9A3] rounded-[100px] mt-4 border border-[#1DB9A3] cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>
            <div className='relative rounded-tr-[32px] rounded-tl-[250px] rounded-bl-[250px] rounded-br-[32px] brokerage_bg m-4 max-w-[634px] w-full'>
                <Image
                    className='absolute bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Brokerage