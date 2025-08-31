"use client";
import React from "react";
import service1 from "../../../../public/home/courses-1.png";
import service2 from "../../../../public/home/courses-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <div
      className="lg:h-[530px] h-full 
        bg-[linear-gradient(358deg,#BFDCFD_1.53%,#020E1B_98.56%)] 
        lg:bg-[linear-gradient(270deg,#BFDCFD_29.3%,#020E1B_98.92%)]
         rounded-[20px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-tr-[32px] lg:rounded-br-[32px] flex lg:flex-row flex-col justify-between overflow-hidden"
    >
      {/* Left Text Section */}
      <div className="lg:pt-[100px] text-left lg:ps-[96px] p-6">
        <h3 className="text-h3 text-neutral-50 font-semibold leading-[35px]">
          Courses
        </h3>
        <div className="max-w-[381px] space-y-5 text-body text-white mt-4">
          <p>Turn your knowledge into structured, sellable products. </p>
          <p>
            Build online, drip, academic, or challenge-based courses with
            built-in tools for gamification, accountability, and engagement.{" "}
          </p>
          <p>
            Every course is optimized to deliver value and generate recurring
            income.
          </p>
        </div>
        <button className="px-6 py-3 text-secondary-50 font-bold text-body leading-6 bg-[#1882FB] hover:bg-transparent hover:text-[#1882FB] rounded-[100px] mt-4 border border-[#1882FB] cursor-pointer transition-all ease-in-out duration-300">
          Learn More
        </button>
      </div>

      {/* Right Images Section */}
      <div className="relative lg:rounded-tr-[32px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] lg:rounded-br-[32px] course_bg m-6 lg:m-4 lg:w-[634px]">
        <motion.div
          initial={{ x: -200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-[57px] right-[-6px]"
        >
          <Image src={service1} alt="" />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[32%] right-[20px]"
        >
          <Image src={service2} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
