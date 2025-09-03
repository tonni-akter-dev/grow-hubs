"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { buttons } from "@/app/utils/data";
import Courses from "./Courses";
import Communities from "./Communities";
import Coaching from "./Coaching";
import Merchandise from "./Merchandise";
import PodCasts from "./PodCasts";
import Events from "./Events";
import Brokerage from "./Brokerage";

export default function Tabs() {
  const [active, setActive] = useState("courses");
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // useEffect(() => {
  //   if (!isHovered) {
  //     intervalRef.current = window.setInterval(() => {
  //       setActive((prev) => {
  //         const currentIndex = buttons.findIndex((btn) => btn.key === prev);
  //         const nextIndex = (currentIndex + 1) % buttons.length;
  //         return buttons[nextIndex].key;
  //       });
  //     }, 2000);
  //   }

  //   return () => {
  //     if (intervalRef.current !== null) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [isHovered]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="mx-12 w-full lg:w-[1080px]">
          <div className="flex items-center justify-between lg:justify-start bg-white p-2 rounded-[100px] w-full gap-2 ">
            {buttons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setActive(btn.key)}
                onMouseEnter={() => setIsHovered(true)} // ⬅ pause when button hovered
                onMouseLeave={() => setIsHovered(false)} // ⬅ resume when leaving
                className={`flex items-center gap-2 text-body text-neutral-8 font-bold ps-2 pe-2 lg:pe-4 py-2 rounded-[100px] transition-all 
    ${
      active === btn.key
        ? `${btn.activeGradient} text-violet-50 font-bold`
        : "text-neutral-8 hover:bg-gray-100 cursor-pointer"
    }`}
              >
                <Image
                  src={active === btn.key ? btn.imgActive : btn.imgInactive}
                  alt={btn.label}
                  width={30}
                  priority
                  height={30}
                  style={
                    active === btn.key
                      ? {}
                      : {
                          mixBlendMode: "luminosity",
                          aspectRatio: "revert-layer",
                        }
                  }
                />
                <span className="text-sm lg:block hidden">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full mt-2 lg:mt-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {active === "courses" && <Courses />}
        {active === "communities" && <Communities />}
        {active === "coaching" && <Coaching />}
        {active === "merchandise" && <Merchandise />}
        {active === "podcasts" && <PodCasts />}
        {active === "events" && <Events />}
        {active === "brokerage" && <Brokerage />}
      </div>
    </div>
  );
}
