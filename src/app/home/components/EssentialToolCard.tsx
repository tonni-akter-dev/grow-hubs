import { features } from '@/app/utils/data'
import Image from 'next/image'
import React from 'react'

const EssentialToolCard = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#fdfcf8] to-[#f6efe3] py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl  p-6 flex flex-col items-start text-left hover:shadow-lg transition-all duration-200"
                    >
                        <div className='flex justify-between items-center'>
                            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                            <Image src={item.icon} alt={item.title} className="w-10 h-10 mb-4" />
                        </div>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EssentialToolCard
