'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { buttons } from '@/app/utils/data'
import Courses from './Courses'

export default function Tabs() {
    const [active, setActive] = useState('courses')

    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-6 w-full">
                <div className='mx-12 w-[1145px]'>
                    <div className="flex items-center justify-start bg-white p-2 rounded-[100px] w-full gap-2">
                        {buttons.map((btn) => (
                            <button
                                key={btn.key}
                                onClick={() => setActive(btn.key)}
                                className={`flex items-center gap-2 text-body text-neutral-8 font-bold ps-2 pe-4 py-2 rounded-[100px] transition-all ${active === btn.key
                                    ? `${btn.activeGradient} text-violet-50 font-bold`
                                    : 'text-neutral-8 hover:bg-gray-100'
                                    }`}
                            >
                                <Image
                                    src={active === btn.key ? btn.imgActive : btn.imgInactive}
                                    alt={btn.label}
                                    width={30}
                                    height={30}
                                    style={
                                        active === btn.key
                                            ? {}
                                            : { mixBlendMode: 'luminosity', aspectRatio: 'revert-layer' }
                                    }
                                />
                                <span className="text-sm">{btn.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* Tab Content */}
            </div>
            <div className="w-full mt-6">
                {active === 'courses' && <Courses />}
                {active === 'communities' && <p>👥 Communities content goes here...</p>}
                {active === 'coaching' && <p>👥 coaching content goes here...</p>}
                {active === 'merchandise' && <p>🛍️ Merchandise content goes here...</p>}
                {active === 'podcasts' && <p>🎙️ Podcasts content goes here...</p>}
                {active === 'events' && <p>📅 Events content goes here...</p>}
                {active === 'brokerage' && <p>🏦 Brokerage content goes here...</p>}
            </div>
        </div>
    )
}
