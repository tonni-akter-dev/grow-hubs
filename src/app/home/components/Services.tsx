import React from 'react'
import Tabs from './Tabs'

const Services = () => {
    return (
        <div className='py-[60px] service_bg'>
            <div className="container text-center">
                <div>
                    <button className='mb-4 py-3 px-3.5 rounded-[100px] text-neutral-13 text-body font-semibold leading-normal' style={{ background: 'linear-gradient(91deg, #C4DFFD 0%, #5EA9FF 100%)' }}>Diversify revenue stream</button>
                    <h2 className='text-display text-neutral-13 leading-[57px] text-center font-bold mb-4'>Maximise earnings with <br /> limitless revenue streams.</h2>
                    <h6 className='text-h6 text-neutral-9 leading-[30px] mb-10'>Create and sell courses, consulting services, and communities - with Zero <br /> marketing cost and a built-in sales network.</h6>
                </div>
                <Tabs />
                {/* tabs */}
            </div>

        </div>
    )
}

export default Services