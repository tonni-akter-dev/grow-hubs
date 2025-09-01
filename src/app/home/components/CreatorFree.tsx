'use client'
import React, { useEffect, useState } from "react";

const CreatorFree = () => {

  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-[60px] container">
      <div
        className="bg-[linear-gradient(99deg,#4D5D69_18.46%,#A16A6B_97.93%),linear-gradient(270deg,#FFF_0%,#999_100%)]
   rounded-[30px]   lg:rounded-[300px] pt-[90px] h-[530px]"
      >
        <h2 className="creatot_text lg:text-start text-center lg:ps-[104px]"> Create for free.</h2>

        <div className="flex lg:flex-row flex-col justify-start items-center lg:ps-[131px] gap-7">
          <p
            className=" text-xl lg:text-h5 font-bold leading-[150%] flex lg:flex-row flex-col  gap-3 items-center text-secondary-50 "
            style={{ fontStyle: "italic" }}
          >
            Get started for free
            <span className="lg:transform: rotate(0deg) transform: rotate(90deg)">    <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="8"
              viewBox="0 0 62 8"
              fill="none"
            >
              <path
                d="M61.3617 4.60446C61.5585 4.4108 61.5611 4.09422 61.3674 3.89738L58.2114 0.689632C58.0178 0.492789 57.7012 0.490215 57.5044 0.683883C57.3075 0.877551 57.3049 1.19412 57.4986 1.39097L60.3039 4.2423L57.4526 7.04763C57.2558 7.2413 57.2532 7.55787 57.4469 7.75472C57.6405 7.95156 57.9571 7.95413 58.1539 7.76047L61.3617 4.60446ZM0 3.75195L-0.00406547 4.25194L61.007 4.74803L61.011 4.24805L61.0151 3.74806L0.00406547 3.25197L0 3.75195Z"
                fill="white"
              />
            </svg></span>
          </p>
          <div className="flex justify-end items-end">
            <div className="flex justify-end items-end mb-12">
              <div className={`pres5 size-[287px] flex justify-center items-center ${isPulsing ? 'animate-pulse5' : ''}`}>
                <div className={`pres4 size-[246px] flex justify-center items-center ${isPulsing ? 'animate-pulse4' : ''}`}>
                  <div className={`pres3 size-[213px] flex justify-center items-center ${isPulsing ? 'animate-pulse3' : ''}`}>
                    <div className={`pres2 size-[171px] flex justify-center items-center ${isPulsing ? 'animate-pulse2' : ''}`}>
                      <div
                        className="cursor-pointer pres_bg flex justify-center items-center relative z-10"
                      >
                        PRESS <br /> HERE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="sell_text">Sell without ads</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorFree;
