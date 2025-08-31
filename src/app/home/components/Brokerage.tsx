import React from "react";
import service1 from "../../../../public/home/brokerage-1.png";
import service2 from "../../../../public/home/brokerage-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Brokerage = () => {
  return (
    <div
      className="lg:h-[530px] h-full overflow-hidden
        bg-[linear-gradient(358deg,#BFFDF5_1.53%,#021B18_98.56%)] 
        lg:bg-[linear-gradient(270deg,#BFFDF5_29.3%,#021B18_98.92%)]
        rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px]
        flex lg:flex-row flex-col justify-between"
    >
      {/* Left content */}
      <div className="lg:pt-[87px] text-left lg:ps-[96px] p-6">
        <h3 className="text-h3 text-neutral-50 font-semibold leading-[35px]">
          Brokerage
        </h3>
        <div className="max-w-[381px] space-y-5 text-body text-white mt-4">
          <p>A unique Growhubs feature: earn money by mediating deals.</p>
          <p>
            Connect creators, clients, and products across the platform, and
            earn a commission for enabling sales.
          </p>
          <p>
            Brokerage transforms your network into a powerful asset — even when
            you’re not selling your own products.
          </p>
        </div>
        <button className="px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#1DB9A3] hover:bg-transparent hover:text-[#1DB9A3] rounded-[100px] mt-4 border border-[#1DB9A3] cursor-pointer transition-all ease-in-out duration-300">
          Learn More
        </button>
      </div>

      {/* Right image */}
      <div className="relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] podcast_bg m-6 lg:m-4 lg:w-[634px]">
        <motion.div
          initial={{ x: -200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-[31px] left-[27%]"
        >
          <Image src={service1} alt="" />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[37%] left-[22%]"
        >
          <Image src={service2} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Brokerage;
