import React from 'react'

const BannerDots = () => {
  return (
 <div className="">
      
                {/* LEFT DOTS */}
                <div className="absolute left-[7%] top-[9%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute left-[13%] top-[16%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute left-[10%] top-[24%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute left-[16%] top-[38%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>


                {/* <!-- Pulsing dots --> */}
                <div className="absolute right-[12%] top-10 z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute right-[14%] top-[20%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute right-30 top-[42%] z-10">
                    <span className="inline-block size-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
            </div>
  )
}

export default BannerDots