import React from 'react'
import service1 from '../../../../public/home/servicehover2.png'
import Image from 'next/image'

const Communities = () => {
    return (
        <div className='h-[530px] bg-[linear-gradient(270deg,#DEBFFD_29.3%,#0F021B_98.92%)] rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] flex  justify-between'>
            <div className='pt-[111px] text-left ps-[96px] '>
                <h3 className='text-h3 text-neutral-50 font-semibold leading-[35px] '>Communities</h3>
                <div className='max-w-[381px] space-y-5 text-body text-white mt-4'>
                    <p className=' '> Launch thriving membership spaces where people connect, collaborate, and grow with you. </p>
                    <p>Sell access to exclusive discussions, resources, and live events  </p>
                    <p>Build a loyal audience that stays engaged month after month.</p>
                </div>

                <button className='px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-violet-500 hover:bg-transparent hover:text-violet-500 rounded-[100px] mt-4 border border-violet-500 cursor-pointer transition-all ease-in-out duration-300'>Learn More</button>
            </div>
            <div className='relative rounded-tl-[250px] rounded-bl-[250px] rounded-tr-[32px] rounded-br-[32px] communities_bg m-4 max-w-[634px] w-full'>
                <Image
                    className='absolute bottom-[90px] right-9 slide-diagonal'
                    src={service1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Communities
