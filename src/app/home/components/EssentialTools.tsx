import React from 'react'
import EssentialToolCard from './EssentialToolCard'

const EssentialTools = () => {
    return (
        <div className='bg-[#FDF6E8] pt-[100px]'>
            <div className='text-center'>
                <button className='bg-[linear-gradient(90deg,_#BCB3A0_0%,_#E0D8C9_100%)] text-black text-body uppercase  font-semibold text-center mb-6 px-3.5 py-3  rounded-[100px] '>CO-sell</button>
                <h1 className='text-display text-neutral-13 font-bold leading-[57px]'>Essential Tools <br />
                    Zero Distractions</h1>
                <p className='text-h6 text-neutral-9 mb-6  font-medium leading-[30px] '>Create diverse products on the platform and leverage our <br /> powerful tools to drive sales within and beyond GrowHubs.</p>
            </div>
            <EssentialToolCard />
        </div>
    )
}

export default EssentialTools
