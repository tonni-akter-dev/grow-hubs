import { features } from '@/app/utils/data'
import Image from 'next/image'
import React from 'react'

const SellCard = () => {
    return (
        <div className="w-full pb-[105px]">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  lg:gap-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        style={{ boxShadow: '0 8px 28px 0 rgba(20, 20, 43, 0.10)' }}
                        className="bg-white rounded-xl p-6 flex flex-col items-start text-left transition-transform duration-200 hover:shadow-xl hover:-translate-y-1"
                    >
                        <Image src={item.icon} alt={item.title} className=" size-[65px] mb-[30px]" />
                        <h3 className="font-bold text-h5 text-neutral-13  leading-[26px]">{item.title}</h3>
                        <p className="text-neutral-9 mt-2 leading-[26px] text-body ">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SellCard
