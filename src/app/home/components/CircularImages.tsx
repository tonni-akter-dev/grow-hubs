"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import TorvertIcons from "./TorvertIcons";
import TorvertShadow from "./TorvertShadow";

const CircularImages = () => {
  const [rotation1, setRotation1] = useState(0); // Primary icons rotation
  const [rotation2, setRotation2] = useState(0); // Secondary icons rotation
  const [rotation3, setRotation3] = useState(0); // Tertiary icons rotation
  const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setRotation1((prev) => prev + 2);   // ⬅️ was 0.5 → now 2
    setRotation2((prev) => prev - 3);   // ⬅️ was -0.7 → now -3
    setRotation3((prev) => prev + 1.5); // ⬅️ was 0.4 → now 1.5
  }, 30); // ⬅️ was 50ms → now 30ms (more frequent updates)

  return () => clearInterval(interval);
}, [isPaused]);


  // Primary icons (first bordered circle)
  const primaryIcons = [
    { src: "/home/c1.png", alt: "Courses" },
    { src: "/home/c2.png", alt: "Short Videos" },
    { src: "/home/c3.png", alt: "Blogs" },
  ];

  // Secondary icons (second bordered circle)
  const secondaryIcons = [
    { src: "/home/c4.png", alt: "Podcasts" },
    { src: "/home/c5.png", alt: "Consultants" },
    { src: "/home/c7.png", alt: "Threads" },
    { src: "/home/c7.png", alt: "Threads" },
    { src: "/home/c8.png", alt: "Webinars" },
  ];

  // Tertiary icons (third bordered circle)
  const tertiaryIcons = [
    { src: "/home/c9.png", alt: "Live Streaming" },
    { src: "/home/c10.png", alt: "Assessments" },
    { src: "/home/c11.png", alt: "Merchandise" },
    { src: "/home/c1.png", alt: "E-books" },
    { src: "/home/c2.png", alt: "Tutorials" },
    { src: "/home/c3.png", alt: "Workshops" },
  ];

  const radius1 = 100;
  const radius2 = 160;
  const radius3 = 200;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative w-4xl h-[900px] flex items-center justify-center videoContainer ">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className='video'>
        <source src="/home/torver.mp4" type="video/mp4" />
        <source src="/home/torver.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <TorvertIcons />
      <TorvertShadow />
      <div className="absolute z-50 rounded-full size-[460px] flex items-center justify-center">
        <div className="absolute z-20 rounded-full border-[4px] border-[#E5D9CB]  size-[362px] flex items-center justify-center" >
          <div
            className="absolute z-30 rounded-full border-2 border-[#E4D8C5] size-[257px] flex items-center justify-center"
            style={{ boxShadow: "0 -2.09px 8.36px 10.45px #E1D9CE" }}
          >
            <div className="z-40 flex flex-col items-center justify-center text-center  rounded-full size-[153px] acno_1">
              <span className="text-sm text-[#513232]">Go to</span>
              <span className="text-xl font-bold text-[#513232]">TORVET</span>
            </div>
          </div>
        </div>
      </div>
      {primaryIcons.map((icon, index) => {
        const angle = (360 / primaryIcons.length) * index + rotation1;
        const radian = (angle * Math.PI) / 180;
        const x = radius1 * Math.cos(radian);
        const y = radius1 * Math.sin(radian);

        return (
          <div
            key={`primary-${index}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute z-35 transition-all  duration-300 ease-in-out  cursor-pointer flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
              mixBlendMode: "luminosity",
              aspectRatio: "revert-layer",
            }}
          >
            <div className="">
              <Image src={icon.src} alt={icon.alt} width={25} height={25} />
            </div>
          </div>
        );
      })}

      {/* Second layer icons (on second bordered circle) */}
      {secondaryIcons.map((icon, index) => {
        const angle = (360 / secondaryIcons.length) * index + rotation2;
        const radian = (angle * Math.PI) / 180;
        const x = radius2 * Math.cos(radian);
        const y = radius2 * Math.sin(radian);

        return (
          <div
            key={`secondary-${index}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute z-25 transition-all duration-300 ease-in-out hover:scale-150 cursor-pointer flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
              mixBlendMode: "luminosity",
              aspectRatio: "revert-layer",
            }}
          >
            <div className="">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={25}
                height={25}
                className="object-contain"
                style={{
                  mixBlendMode: "luminosity",
                  aspectRatio: "revert-layer",
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Third layer icons (on third bordered circle) */}
      {tertiaryIcons.map((icon, index) => {
        const angle = (360 / tertiaryIcons.length) * index + rotation3;
        const radian = (angle * Math.PI) / 180;
        const x = radius3 * Math.cos(radian);
        const y = radius3 * Math.sin(radian);

        return (
          <div
            key={`tertiary-${index}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute z-15 text-neutral-8 transition-all duration-300 ease-in-out hover:scale-150 cursor-pointer flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
              mixBlendMode: "luminosity",
              aspectRatio: "revert-layer",
            }}
          >
            <div className="">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className="object-contain"
                style={{
                  mixBlendMode: "luminosity",
                  aspectRatio: "revert-layer",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircularImages;
