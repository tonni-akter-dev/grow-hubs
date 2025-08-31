import React from 'react'

const BannerDots = () => {
  return (
 <div className="">
      
                {/* LEFT DOTS */}
                <div className="absolute lg:left-[7%] left-[5%] top-0 lg:top-[9%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute left-[19%] lg:left-[13%] top-[4%] lg:top-[16%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute left-[10%] top-[24%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute lg:left-[16%] left-[10%] lg:top-[38%] top-[10%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>


                {/* <!-- Pulsing dots --> */}
                <div className="absolute right-[12%]  top-0 lg:top-10 z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute right-[6%] lg:right-[14%] lg:top-[20%] top-[8%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute right-[12%] lg:right-30 top-[22%] lg:top-[42%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
            </div>
  )
}

export default BannerDots