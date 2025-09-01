import React from "react";
import service1 from "../../../../public/home/communities-1.png";
import service2 from "../../../../public/home/communities-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Communities = () => {
  return (
    <div
      className="lg:h-[530px] h-full overflow-hidden
        bg-[linear-gradient(358deg,#DEBFFD_1.53%,#0F021B_98.56%)] 
        lg:bg-[linear-gradient(270deg,#DEBFFD_29.3%,#0F021B_98.92%)]
        rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px] 
        flex lg:flex-row flex-col justify-between"
    >
      {/* Left content */}
      <div className="lg:pt-[111px] text-left lg:ps-[96px] p-6">
        <h3 className="text-h3 text-neutral-50 font-semibold leading-[35px]">
          Communities
        </h3>
        <div className="max-w-[381px] space-y-5 text-body text-white mt-4">
          <p>
            Launch thriving membership spaces where people connect, collaborate,
            and grow with you.
          </p>
          <p>
            Sell access to exclusive discussions, resources, and live events.
          </p>
          <p>Build a loyal audience that stays engaged month after month.</p>
        </div>
        <button className="px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-violet-500 hover:bg-transparent hover:text-violet-500 rounded-[100px] mt-4 border border-violet-500 cursor-pointer transition-all ease-in-out duration-300">
          Learn More
        </button>
      </div>

      {/* Right image */}
      <div className="relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] communities_bg m-6 lg:m-4 lg:w-[634px]">
        <motion.div
          initial={{ x: -200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-2.5 left-6 lg:w-fit w-[200px]"
        >
          <Image src={service1} alt="" />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[21%] lg:top-[14%] right-[26px] lg:w-fit w-[170px]"
        >
          <Image src={service2} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Communities;
