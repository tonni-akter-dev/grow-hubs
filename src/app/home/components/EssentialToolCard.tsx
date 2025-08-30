import { tools } from '@/app/utils/data'
import Image from 'next/image'
import React from 'react'

const EssentialToolCard = () => {
    return (
        <div className="w-full  py-[100px]">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tools.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl  px-8 pb-8 pt-11 flex flex-col items-start text-left hover:shadow-lg transition-all duration-200">
                        <div className='flex justify-between w-full items-center mb-11'>
                            <h3 className="font-semibold leading-[35px] text-[#4E4E4E] text-h3 ">{item.title}</h3>
                            <Image src={item.icon} alt={item.title} className="w-10 h-10" />
                        </div>
                        <p className="text-[#757575] text-h6 leading-[30px]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EssentialToolCard
