import { tools } from '@/app/utils/data'
import Image from 'next/image'
import React from 'react'

const EssentialToolCard = () => {
    return (
        <div className="w-full  py-10 lg:py-[100px]">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
                {tools.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-4 lg:px-8 lg:pb-8 lg:pt-11 flex flex-col items-start text-left hover:shadow-lg transition-all duration-200">
                        <div className='flex justify-between w-full items-center mb-4 lg:mb-11'>
                            <h3 className="font-semibold leading-[35px] text-[#4E4E4E] text-h6 lg:text-h3 ">{item.title}</h3>
                            <Image src={item.icon} alt={item.title} className="lg:size-10 size-[24px]" />
                        </div>
                        <p className="text-[#757575] text-body-sm
                         lg:text-h6 leading-[21px] lg:leading-[30px]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EssentialToolCard
