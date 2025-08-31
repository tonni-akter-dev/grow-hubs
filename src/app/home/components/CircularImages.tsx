"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import threads from "../../../../public/home/threads.png";
import consultants from "../../../../public/home/consultants.svg";
import consultant1 from "../../../../public/home/consultant1.svg";
import blogs from "../../../../public/home/blogs.svg";
import blogs1 from "../../../../public/home/blogs1.svg";
import webinars from "../../../../public/home/webinars.svg";
import live from "../../../../public/home/live.svg";
import live1 from "../../../../public/home/live1.svg";
import podcast from "../../../../public/home/podcast.svg";
import merchandise from "../../../../public/home/merchandise1.svg";
import assesment from "../../../../public/home/assesment.svg";
import lesson1 from "../../../../public/home/lesson1.svg";
import communities from "../../../../public/home/communities.svg";
import events1 from "../../../../public/home/events1.svg";
import courses from "../../../../public/home/courses.svg";
import torvertbottom from "../../../../public/home/torvert-bgbottom.png";
import torvertlefttop from "../../../../public/home/torvert-left-top.png";
import torvertleftbottom from "../../../../public/home/torvert-left-bottom.png";
import torvertrighttop from "../../../../public/home/torvert-right-top.png";

const CircularImages = () => {
  const [rotation1, setRotation1] = useState(0); // Primary icons rotation
  const [rotation2, setRotation2] = useState(0); // Secondary icons rotation
  const [rotation3, setRotation3] = useState(0); // Tertiary icons rotation
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setRotation1((prev) => prev + 0.5); // Primary rotation
      setRotation2((prev) => prev - 0.7); // Secondary rotation (opposite direction)
      setRotation3((prev) => prev + 0.4); // Tertiary rotation
    }, 50);

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

  const radius1 = 100; // Primary icons radius (first circle)
  const radius2 = 160; // Secondary icons radius (second circle)
  const radius3 = 200; // Tertiary icons radius (third circle)

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative w-4xl h-[900px] flex items-center justify-center cloud_bg">
      <div>
        <div className="absolute right-[15%] top-[13%] flex flex-col items-center gap-2">
          <Image src={consultants} alt="" />
          <p className="text-[#FFFFFFD9] font-medium text-h6">Consultants</p>
        </div>
        <div className="absolute right-[20%] top-[29%] flex flex-col items-center gap-2">
          <Image src={blogs} alt="" />
          <p className="text-[#FFFFFF3D] font-medium text-h6">Blogs</p>
        </div>
        <div className="absolute right-[-4%] top-[34%] flex items-center gap-2">
          <Image src={threads} alt="" />
          <p className="text-[#FFFFFF66] font-medium text-h6">Threads</p>
        </div>
        <div className="absolute right-[-14%] top-[47%] flex flex-col items-center gap-2">
          <Image src={webinars} alt="" />
          <p className="text-[#FFFFFF66] font-medium text-h6">Webinars</p>
        </div>
        <div className="absolute right-[1%] top-[60%] flex flex-col items-center gap-2">
          <Image src={live} alt="" />
          <p className="text-[#FFFFFF75] font-medium text-h6">Live streaming</p>
        </div>
        <div className="absolute right-[0%] bottom-[18%] flex flex-col items-center gap-2">
          <Image src={consultant1} alt="" />
          <p className="text-[#FFFFFFCC] font-medium text-h6">Consultants</p>
        </div>
        <div className="absolute right-[12%] bottom-[5%] flex flex-col items-center gap-2">
          <Image src={podcast} alt="" />
          <p className="text-[#FFFFFFCC] font-medium text-h6">Podcasts</p>
        </div>

        <div className="absolute right-[34%] bottom-[3%] flex flex-col items-center gap-2">
          <Image src={merchandise} alt="" />
          <p className="text-[#FFFFFF70] font-medium text-h6">Merchandise</p>
        </div>
        <div className="absolute right-[49%] bottom-[15%] flex items-center gap-2">
          <Image src={assesment} alt="" />
          <p className="text-[#FFFFFF4D] font-medium text-h6">Assessments</p>
        </div>
        <div className="absolute left-[22%] bottom-[23%] flex flex-col items-center gap-2">
          <Image src={blogs1} alt="" />
          <p className="text-[#FFFFFF3D] font-medium text-h6">Blogs</p>
        </div>
        <div className="absolute left-[6%] bottom-[12%] flex flex-col items-center gap-2">
          <Image src={lesson1} alt="" />
          <p className="text-[#FFFFFF33] font-medium text-h6">Lessons</p>
        </div>
        <div className="absolute left-[9%] bottom-[38%] flex flex-col items-center gap-2">
          <Image src={communities} alt="" />
          <p className="text-[#FFFFFF4D] font-medium text-h6">Communities</p>
        </div>
        <div className="absolute left-[-5%] bottom-[46%] flex flex-col items-center gap-2">
          <Image src={live1} alt="" />
          <p className="text-[#FFFFFF8F] font-medium text-h6">Short videos</p>
        </div>
        <div className="absolute left-[38%] top-[13%]  flex flex-col items-center gap-2">
          <Image src={podcast} alt="" />
          <p className="text-[#FFFFFF82] font-medium text-h6">Podcasts</p>
        </div>
        <div className="absolute left-[22%] top-[25%]  flex items-center gap-2">
          <Image src={events1} alt="" />
          <p className="text-[#FFFFFFCC] font-medium text-h6">Events</p>
        </div>
        <div className="absolute left-[3%] top-[20%]  flex  flex-col items-center gap-2">
          <Image src={courses} alt="" />
          <p className="text-[#FFFFFFCC] font-medium text-h6">Courses</p>
        </div>
      </div>

      {/* shadow */}
      <Image
        className="absolute bottom-[1%] right-11 z-0"
        src={torvertbottom}
        alt=""
      />
      <Image
        className="absolute top-[-9%] left-[-17%] z-0"
        src={torvertlefttop}
        alt=""
      />
      <Image
        className="absolute bottom-[-15%] left-[-21%]"
        src={torvertleftbottom}
        alt=""
      />
      <Image className="absolute top-[-19%] right-[-12%]" src={torvertrighttop} alt="" />
      {/* shadow */}

      {/* Third bordered circle (largest) */}
      <div className="absolute z-50 rounded-full size-[460px] flex items-center justify-center">
        {/* Second bordered circle (medium) */}
        <div className="absolute z-20 rounded-full border-2 border-[#E5D9CB]  size-[362px] flex items-center justify-center">
          {/* First bordered circle (smallest) */}
          <div
            className="absolute z-30 rounded-full border-2 border-[#E4D8C5] size-[257px] flex items-center justify-center"
            style={{ boxShadow: "0 -2.09px 8.36px 10.45px #E1D9CE" }}
          >
            {/* Central content */}
            <div className="z-40 flex flex-col items-center acno_1 justify-center text-center bg-white/90 rounded-full size-[153px] shadow-lg ">
              <span className="text-sm text-gray-600">Go to</span>
              <span className="text-xl font-bold text-blue-600">TORVET</span>
            </div>
          </div>
        </div>
      </div>

      {/* First layer icons (on first bordered circle) */}
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
            className="absolute z-35 transition-all duration-300 ease-in-out  cursor-pointer flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="icon-blend">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={25}
                height={25}
                className="object-contain icon-image"
              />
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
