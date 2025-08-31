
'use client'
import { tools } from '@/app/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut" as const,
        },
    }),
}

const EssentialToolCard = () => {
    return (
        <div className="w-full pt-10 pb-[60px]">
            <div className="container px-4 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
                {tools.map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ boxShadow: '0 62px 136px 0 rgba(0, 0, 0, 0.10)' }}
                        className="bg-white cursor-pointer rounded-xl p-4 lg:p-8 flex flex-col justify-between gap-6 items-start text-left transition-transform duration-200 hover:shadow-xl "
                    >
                        {/* Top content */}
                        <div className="flex flex-col gap-4 lg:gap-6 w-full">
                            <div className="flex justify-between w-full items-center">
                                <h3 className="font-semibold leading-[35px] text-[#4E4E4E] text-h6 lg:text-h3">
                                    {item.title}
                                </h3>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    className="lg:size-10 size-[24px]"
                                />
                            </div>
                            <p className="text-[#757575] text-body-sm lg:text-body leading-[21px] lg:leading-6">
                                {item.description}
                            </p>
                        </div>
                        {/* Bottom button */}
                        <Link
                            href="#"
                            className="flex gap-2 items-center text-body text-[#0D7EFF] font-bold mt-auto"
                        >
                            Learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="13"
                                viewBox="0 0 15 13"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_2726_1026)">
                                    <path
                                        d="M8.12417 1.49242L12.8694 6.23761M12.8694 6.23761L8.12417 10.9838M12.8694 6.23761L1.00537 6.23862"
                                        stroke="#0D7EFF"
                                        strokeWidth="2.00304"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2726_1026">
                                        <rect
                                            width="14.0213"
                                            height="12.0182"
                                            fill="white"
                                            transform="translate(0 0.490891)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default EssentialToolCard
