import React from "react";
import Marquee from "react-fast-marquee";
import t1 from "../../../../public/home/t1.png";
import t2 from "../../../../public/home/t2.png";
import t3 from "../../../../public/home/t3.png";
import t4 from "../../../../public/home/t4.png";
import t5 from "../../../../public/home/t5.png";
import t6 from "../../../../public/home/t6.png";
import t7 from "../../../../public/home/t7.png";
import t11 from "../../../../public/home/t11.png";
import t12 from "../../../../public/home/t12.png";
import t13 from "../../../../public/home/t13.png";
import t14 from "../../../../public/home/t14.png";
import t15 from "../../../../public/home/t15.png";
import t16 from "../../../../public/home/t16.png";
import t17 from "../../../../public/home/t17.png";
import trustedrightshadow from "../../../../public/home/trustedrightshadow.png";
import trustedrleftshadow from "../../../../public/home/trustedrleftshadow.png";
import trustedrleftshadow_sm from "../../../../public/home/trustedrleftshadow_sm.png";
import trustedrightshadow_sm from "../../../../public/home/trustedrightshadow_sm.png";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div>
      <p className="text-neutral-9 text-body md:text-h5 text-center mb-8 leading-[150%] ">
        TRUSTED BY +10,000 CONSULTANTS <br className="lg:hidden block" /> &
        ORGANISATIONS
      </p>
      <div className="relative  h-[101px] lg:ps-12 lg:pe-[60px] py-8 bg-[#F6F5F5] lg:rounded-[20px]">
        <div className="hidden lg:block">
          <Marquee speed={25} direction="right">
            <div className="flex gap-[51px] items-center">
              <Image className="lg:h-7 w-full " src={t1} alt="" />
              <Image className="lg:h-10 w-full " src={t2} alt="" />
              <Image className="lg:h-10 w-full " src={t3} alt="" />
              <Image className="lg:h-10 w-full " src={t4} alt="" />
              <Image className="lg:h-10 w-full " src={t5} alt="" />
              <Image className="lg:h-10 w-full " src={t6} alt="" />
              <Image className=" h-[30px] lg:h-5 mr-[51px]" src={t7} alt="" />
            </div>
          </Marquee>
        </div>
        <div className="block lg:hidden" >
          <Marquee speed={25} direction="right">
            <div className="flex gap-[40px] items-center">
              <Image src={t11} alt="" />
              <Image src={t12} alt="" />
              <Image src={t13} alt="" />
              <Image src={t14} alt="" />
              <Image src={t15} alt="" />
              <Image src={t16} alt="" />
              <Image className="  mr-[54px]" src={t17} alt="" />
            </div>
          </Marquee>
        </div>
        <div className="absolute right-0 top-0 h-[101px] z-50 w-[91px] lg:w-[290px] ">
          <Image
            className="rounded-[20px] lg:block hidden"
            src={trustedrightshadow}
            alt=""
          />
          <Image
            className="lg:hidden block"
            src={trustedrightshadow_sm}
            alt=""
          />
        </div>
        <div className="absolute left-0 top-[1px] h-[101px] z-50  w-[91px] lg:w-[290px] ">
          <Image
            className="rounded-[20px] lg:block hidden"
            src={trustedrleftshadow}
            alt=""
          />
          <Image
            className=" lg:hidden block"
            src={trustedrleftshadow_sm}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
