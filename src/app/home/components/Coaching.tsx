import React from "react";
import service1 from "../../../../public/home/coatching-2.png";
import service2 from "../../../../public/home/coatching-1.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Coaching = () => {
  return (
    <div
      className="lg:h-[530px] h-full overflow-hidden
        bg-[linear-gradient(358deg,#FDBFBF_1.53%,#1B0202_98.56%)] 
        lg:bg-[linear-gradient(270deg,#FDBFBF_29.3%,#1B0202_98.92%)]
        rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px] 
        flex lg:flex-row flex-col justify-between"
    >
      {/* Left content */}
      <div className="lg:pt-[135px] text-left lg:ps-[96px] p-6">
        <h3 className="text-h3 text-neutral-50 font-semibold leading-[35px] lg:whitespace-nowrap">
          Coaching & Consulting
        </h3>
        <div className="max-w-[381px] space-y-5 text-body text-white mt-4">
          <p>
            Offer 1:1 or group sessions with integrated booking, payments, and
            video tools.
          </p>
          <p>
            Clients can schedule you directly, and you stay focused on
            delivering results instead of handling logistics.
          </p>
        </div>
        <button className="px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#D60000] hover:bg-transparent hover:text-[#D60000] rounded-[100px] mt-4 border border-[#D60000] cursor-pointer transition-all ease-in-out duration-300">
          Learn More
        </button>
      </div>

      {/* Right image */}
      <div className="relative rounded-[32px] lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] coaching_bg m-6 lg:m-4 lg:w-[634px]">
        <motion.div
          initial={{ x: -200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-[11%] left-0 lg:left-[23%] lg:w-fit w-[200px]"
        >
          <Image src={service1} alt="" />
        </motion.div>

        <motion.div
     initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
          className="absolute top-[14%] right-[26px] lg:w-fit w-[170px]"
        >
          <Image src={service2} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Coaching;
