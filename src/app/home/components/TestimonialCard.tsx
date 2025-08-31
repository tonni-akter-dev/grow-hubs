import Image from 'next/image'
import React from 'react'
import trustedimg from '../../../../public/home/trustedimg.png'
import profile from '../../../../public/home/profile.png'
import Ratings from './Ratings'

interface Testimonial {
  id: number;
  name: string;
  position: string;
  tags: string[];
  text: string;
  amount: string;
  earnings: string;
  rating: number;
}
interface TestimonialCardProps {
  data: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <div className='max-w-[1230px] flex gap-[42px] rounded-4xl bg-white py-5 ps-6 pb-[22px] pe-8 mx-auto w-full' style={{ boxShadow: '0 8px 28px 0 rgba(20, 20, 43, 0.10)' }}>
      <div className="hidden md:block">
        <Image className='w-[454px]' src={trustedimg} alt="Testimonial visual" />
      </div>
      {/* rightside */}
      <div className='w-full flex-1 flex-col items-start text-start'>
        {/* profile */}
        <div className='flex justify-between items-start w-full '>
          <div className='flex gap-3'>
            <Image className='size-[64px] rounded-[50%]' src={profile} alt={data.name} />
            <div className='text-start mb-5'>
              <h5 className='text-h3 text-[#030711] leading-[110%] font-semibold'>{data.name}</h5>
              <p className='text-[#4B5563] text-body font-normal'>
                {data.position.split(' at ')[0]} at <span className='text-black font-medium'>{data.position.split(' at ')[1]}</span>
              </p>
            </div>
          </div>
          <Ratings rating={data.rating} />
        </div>
        {/* tags */}
        <div className='flex gap-3 items-center mb-10 flex-wrap'>
          {data.tags.map((tag, index) => (
            <button key={index} className='text-[#030711] text-body font-medium leading-6 border border-secondary-900 rounded-[100px] px-4 py-2.5'>
              {tag}
            </button>
          ))}
        </div>

        <p className='text-h4 text-[#030711] leading-[38px] tracking-[-0.28px] max-w-[495px] mb-10'>
          {data.text}
        </p>

        <h2 className='text-display font-bold leading-[110%]'>{data.amount}</h2>
        <p className='text-h6 text-[#4B5563] font-medium uppercase leading-[150%]'>{data.earnings}</p>
      </div>
    </div>
  )
}

export default TestimonialCard