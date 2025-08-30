import React from 'react'
import EssentialToolCard from './EssentialToolCard'

const EssentialTools = () => {
    return (
        <div className='bg-[#FDF6E8] pt-[100px]'>
            <div className='text-center'>
                <button className='bg-[linear-gradient(90deg,_#BCB3A0_0%,_#E0D8C9_100%)] text-black text-body uppercase  font-semibold text-center mb-6 px-3.5 py-3  rounded-[100px] '>Essential Tools</button>
                <h1 className='mb-4 text-h3 lg:text-display text-neutral-13 font-bold leading-[35px] lg:leading-[57px]'>Essential Tools <br />
                    Zero Distractions</h1>
                <p className=' text-body-sm lg:text-h6 text-neutral-9 font-medium leading-5 lg:leading-[30px] '>Create diverse products on the platform and <br className='lg:hidden block' /> leverage our <br className='lg:block hidden' /> powerful tools to drive sales within <br className='lg:hidden block' /> and beyond GrowHubs.</p>
            </div>
            <EssentialToolCard />
        </div>
    )
}

export default EssentialTools
