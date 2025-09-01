'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import creatorrightball from "../../../../public/home/creator-right-ball.png";
import creatorleftball from "../../../../public/home/creator-left-ball.png";
import IconsSlider from "./IconsSlider";

const SocialInteractions = () => {
  const rightBallRef = useRef<HTMLDivElement | null>(null);
  const leftBallRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rightBallRef.current && leftBallRef.current) {
      rightBallRef.current.animate(
        [
          { transform: "translateX(0) translateY(0)" },
          { transform: "translateX(-300px) translateY(-40px)" },
          { transform: "translateX(-600px) translateY(20px)" },
          { transform: "translateX(-900px) translateY(-30px)" },
          { transform: "translateX(-1200px) translateY(10px)" },
          { transform: "translateX(-1400px) translateY(10px)" },
        ],
        {
          duration: 14000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
      leftBallRef.current.animate(
        [
          { transform: "translateX(0) translateY(0)" },
          { transform: "translateX(300px) translateY(-40px)" },
          { transform: "translateX(600px) translateY(20px)" },
          { transform: "translateX(900px) translateY(-30px)" },
          { transform: "translateX(1200px) translateY(10px)" },
          { transform: "translateX(1400px) translateY(10px)" },
        ],
        {
          duration: 14000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center py-[60px] lg:py-[120px] bg-[linear-gradient(180deg,#E8F1FD_0%,#E3F1FA_28.69%,#F5F9EC_73.37%,#FDF4E7_85.69%)] relative overflow-hidden text-center">
      <div ref={rightBallRef} className="absolute right-0 top-10">
        <Image
          src={creatorrightball}
          alt=""
          className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
        />
      </div>
      <div ref={leftBallRef} className="absolute left-0 bottom-16">
        <Image
          src={creatorleftball}
          alt=""
          className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
        />
      </div>
      <button className="mb-4 text-neutral-13 text-caption lg:text-h6 font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(268deg,#CEE9FF_1.17%,#A0DBFF_98.05%)] rounded-[100px]">
        Not Just Social. Truly Supportive
      </button>
      <h2 className="text-neutral-13 font-bold leading-[110%] lg:text-display text-h3 mb-4">
        Creators over <br className="lg:hidden block" /> algorithms
      </h2>
      <p className="text-neutral-9 font-medium text-body-sm lg:text-h6 leading-[150%] text-center mb-4">
        Growhubs is built on collaboration — no data <br /> mining, no ad
        chasing, just growth.
      </p>
      <h2 className="text-[#575757] text-h5 lg:text-[44px] font-semibold">We are not</h2>
      <IconsSlider />

      <button className=" text-white mt-[34px] text-body-sm lg:text-body font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(267deg,#E0AB70_0.92%,#BFA680_98.03%)] rounded-[100px]">
        Start for free - No credit card needed
      </button>
    </div>
  );
};

export default SocialInteractions;
