import React from "react";
import service1 from "../../../../public/home/merchandise-1.png";
import service2 from "../../../../public/home/merchandise-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Merchandise = () => {
  return (
    <div
      className="lg:h-[530px] h-full overflow-hidden
        bg-[linear-gradient(358deg,#E3FDBF_1.53%,#111B02_98.56%)] 
        lg:bg-[linear-gradient(270deg,#E3FDBF_29.3%,#111B02_98.92%)]
        rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px]
        flex lg:flex-row flex-col justify-between"
    >
      {/* Left content */}
      <div className="lg:pt-[123px] text-left lg:ps-[96px] p-6">
        <h3 className="text-h3 text-neutral-50 font-semibold leading-[35px]">
          Merchandise
        </h3>
        <div className="max-w-[381px] space-y-5 text-body text-white mt-4">
          <p>
            Sell digital products (ebooks, templates, guides) or physical items
            (books, branded gear) without leaving the platform.
          </p>
          <p>
            Your merchandise integrates directly with your courses, communities,
            and events — creating upsell and bundle opportunities.
          </p>
        </div>
        <button className="px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#6EB50B] hover:bg-transparent hover:text-[#6EB50B] rounded-[100px] mt-4 border border-[#6EB50B] cursor-pointer transition-all ease-in-out duration-300">
          Learn More
        </button>
      </div>

      {/* Right image */}
      <div className="relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] merchandise_bg m-6 lg:m-4 lg:w-[634px]">
        <motion.div
          initial={{ x: -200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-[11%] left-[11%]"
        >
          <Image src={service1} alt="" />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[18%] right-[26px]"
        >
          <Image src={service2} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Merchandise;
