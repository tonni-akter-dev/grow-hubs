import { stats } from '@/app/utils/data'
import React from 'react'

const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-11 ps-8 pe-4">
            {stats.map((item, index) => (
                <div
                    key={index}
                    className="border border-neutral-11 rounded-xl px-4 py-8 text-neutral-50 flex flex-col gap-2 leading-normal"
                >
                    <p className="text-body">{item.title}</p>
                    <h2 className="text-h2 font-semibold">{item.value}</h2>
                    <p className="text-body">{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats