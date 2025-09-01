// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// import TorvertIcons from "./TorvertIcons";
// import TorvertShadow from "./TorvertShadow";

// const CircularImages = () => {
//   const [rotation1, setRotation1] = useState(0); // Primary icons rotation
//   const [rotation2, setRotation2] = useState(0); // Secondary icons rotation
//   const [rotation3, setRotation3] = useState(0); // Tertiary icons rotation
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setRotation1((prev) => prev + 0.5); // Primary rotation
//       setRotation2((prev) => prev - 0.7); // Secondary rotation (opposite direction)
//       setRotation3((prev) => prev + 0.4); // Tertiary rotation
//     }, 50);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // Primary icons (first bordered circle)
//   const primaryIcons = [
//     { src: "/home/c1.png", alt: "Courses" },
//     { src: "/home/c2.png", alt: "Short Videos" },
//     { src: "/home/c3.png", alt: "Blogs" },
//   ];

//   // Secondary icons (second bordered circle)
//   const secondaryIcons = [
//     { src: "/home/c4.png", alt: "Podcasts" },
//     { src: "/home/c5.png", alt: "Consultants" },
//     { src: "/home/c7.png", alt: "Threads" },
//     { src: "/home/c7.png", alt: "Threads" },
//     { src: "/home/c8.png", alt: "Webinars" },
//   ];

//   // Tertiary icons (third bordered circle)
//   const tertiaryIcons = [
//     { src: "/home/c9.png", alt: "Live Streaming" },
//     { src: "/home/c10.png", alt: "Assessments" },
//     { src: "/home/c11.png", alt: "Merchandise" },
//     { src: "/home/c1.png", alt: "E-books" },
//     { src: "/home/c2.png", alt: "Tutorials" },
//     { src: "/home/c3.png", alt: "Workshops" },
//   ];

//   const radius1 = 100; // Primary icons radius (first circle)
//   const radius2 = 160; // Secondary icons radius (second circle)
//   const radius3 = 200; // Tertiary icons radius (third circle)

//   const handleMouseEnter = () => setIsPaused(true);
//   const handleMouseLeave = () => setIsPaused(false);

//   return (
//     <div className="relative w-4xl h-[900px] flex items-center justify-center cloud_bg">
//       <TorvertIcons />
//       {/* shadow */}
//       <TorvertShadow />

//       {/* Third bordered circle (largest) */}
//       <div className="absolute z-50 rounded-full size-[460px] flex items-center justify-center">
//         {/* Second bordered circle (medium) */}
//         <div className="absolute z-20 rounded-full border-2 border-[#E5D9CB]  size-[362px] flex items-center justify-center">
//           {/* First bordered circle (smallest) */}
//           <div
//             className="absolute z-30 rounded-full border-2 border-[#E4D8C5] size-[257px] flex items-center justify-center"
//             style={{ boxShadow: "0 -2.09px 8.36px 10.45px #E1D9CE" }}
//           >
//             {/* Central content */}
//             <div className="z-40 flex flex-col items-center acno_1 justify-center text-center bg-white/90 rounded-full size-[153px] ">
//               <span className="text-sm text-[#513232]">Go to</span>
//               <span className="text-xl font-bold text-[#513232]">TORVET</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* First layer icons (on first bordered circle) */}
//       {primaryIcons.map((icon, index) => {
//         const angle = (360 / primaryIcons.length) * index + rotation1;
//         const radian = (angle * Math.PI) / 180;
//         const x = radius1 * Math.cos(radian);
//         const y = radius1 * Math.sin(radian);

//         return (
//           <div
//             key={`primary-${index}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="absolute z-35 transition-all  duration-300 ease-in-out  cursor-pointer flex flex-col items-center"
//             style={{
//               left: `calc(50% + ${x}px)`,
//               top: `calc(50% + ${y}px)`,
//               transform: `translate(-50%, -50%)`,
//               mixBlendMode: "luminosity",
//               aspectRatio: "revert-layer",
//             }}
//           >
//             <div className="">
//               <Image src={icon.src} alt={icon.alt} width={25} height={25} />
//             </div>
//           </div>
//         );
//       })}

//       {/* Second layer icons (on second bordered circle) */}
//       {secondaryIcons.map((icon, index) => {
//         const angle = (360 / secondaryIcons.length) * index + rotation2;
//         const radian = (angle * Math.PI) / 180;
//         const x = radius2 * Math.cos(radian);
//         const y = radius2 * Math.sin(radian);

//         return (
//           <div
//             key={`secondary-${index}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="absolute z-25 transition-all duration-300 ease-in-out hover:scale-150 cursor-pointer flex flex-col items-center"
//             style={{
//               left: `calc(50% + ${x}px)`,
//               top: `calc(50% + ${y}px)`,
//               transform: `translate(-50%, -50%)`,
//               mixBlendMode: "luminosity",
//               aspectRatio: "revert-layer",
//             }}
//           >
//             <div className="">
//               <Image
//                 src={icon.src}
//                 alt={icon.alt}
//                 width={25}
//                 height={25}
//                 className="object-contain"
//                 style={{
//                   mixBlendMode: "luminosity",
//                   aspectRatio: "revert-layer",
//                 }}
//               />
//             </div>
//           </div>
//         );
//       })}

//       {/* Third layer icons (on third bordered circle) */}
//       {tertiaryIcons.map((icon, index) => {
//         const angle = (360 / tertiaryIcons.length) * index + rotation3;
//         const radian = (angle * Math.PI) / 180;
//         const x = radius3 * Math.cos(radian);
//         const y = radius3 * Math.sin(radian);

//         return (
//           <div
//             key={`tertiary-${index}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="absolute z-15 text-neutral-8 transition-all duration-300 ease-in-out hover:scale-150 cursor-pointer flex flex-col items-center"
//             style={{
//               left: `calc(50% + ${x}px)`,
//               top: `calc(50% + ${y}px)`,
//               transform: `translate(-50%, -50%)`,
//               mixBlendMode: "luminosity",
//               aspectRatio: "revert-layer",
//             }}
//           >
//             <div className="">
//               <Image
//                 src={icon.src}
//                 alt={icon.alt}
//                 width={20}
//                 height={20}
//                 className="object-contain"
//                 style={{
//                   mixBlendMode: "luminosity",
//                   aspectRatio: "revert-layer",
//                 }}
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CircularImages;


'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";

import TorvertIcons from "./TorvertIcons";
import TorvertShadow from "./TorvertShadow";

const CircularImages = () => {
  const [rotation1, setRotation1] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [animationPosition, setAnimationPosition] = useState(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setRotation1((prev) => prev + 0.5);
      setRotation2((prev) => prev - 0.7);
      setRotation3((prev) => prev + 0.4);
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

  const primaryIcons = [
    { src: "/home/c1.png", alt: "Courses", id: "courses" },
    { src: "/home/c2.png", alt: "Short Videos", id: "short-videos" },
    { src: "/home/c3.png", alt: "Blogs", id: "blogs" },
  ];

  const secondaryIcons = [
    { src: "/home/c4.png", alt: "Podcasts", id: "podcasts" },
    { src: "/home/c5.png", alt: "Consultants", id: "consultants" },
    { src: "/home/c7.png", alt: "Threads", id: "threads" },
    { src: "/home/c7.png", alt: "Threads", id: "threads2" },
    { src: "/home/c8.png", alt: "Webinars", id: "webinars" },
  ];

  const tertiaryIcons = [
    { src: "/home/c9.png", alt: "Live Streaming", id: "live-streaming" },
    { src: "/home/c10.png", alt: "Assessments", id: "assessments" },
    { src: "/home/c11.png", alt: "Merchandise", id: "merchandise" },
    { src: "/home/c1.png", alt: "E-books", id: "ebooks" },
    { src: "/home/c2.png", alt: "Tutorials", id: "tutorials" },
    { src: "/home/c3.png", alt: "Workshops", id: "workshops" },
  ];

  const radius1 = 100;
  const radius2 = 160;
  const radius3 = 200;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleIconHover = (iconName, position) => {
    setHoveredIcon(iconName);
    setAnimationPosition(position);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
    setAnimationPosition(null);
  };

  // Map icon names to target positions in circles
  const iconTargetMap = {
    "Consultants": { circle: "primary", index: 1 },
    "Blogs": { circle: "primary", index: 2 },
    "Threads": { circle: "secondary", index: 2 },
    "Webinars": { circle: "secondary", index: 4 },
    "Live streaming": { circle: "tertiary", index: 0 },
    "Podcasts": { circle: "secondary", index: 0 },
    "Merchandise": { circle: "tertiary", index: 2 },
    "Assessments": { circle: "tertiary", index: 1 },
    "Lessons": { circle: "tertiary", index: 4 },
    "Communities": { circle: "secondary", index: 3 },
    "Short videos": { circle: "primary", index: 1 },
    "Events": { circle: "tertiary", index: 5 },
    "Courses": { circle: "primary", index: 0 },
  };

  return (
    <div className="relative w-4xl h-[900px] flex items-center justify-center cloud_bg">
      <TorvertIcons 
        onIconHover={handleIconHover}
        onIconLeave={handleIconLeave}
        hoveredIcon={hoveredIcon}
      />
      
      {/* Rocket flame animation */}
      {animationPosition && hoveredIcon && (
        <div 
          className="absolute z-60 rocket-animation"
          style={{
            left: animationPosition.x,
            top: animationPosition.y,
          }}
        >
          <div className="rocket-flame">
            <div className="flame-particle"></div>
            <div className="flame-particle"></div>
            <div className="flame-particle"></div>
          </div>
        </div>
      )}

      <TorvertShadow />

      {/* Third bordered circle (largest) */}
      <div className="absolute z-50 rounded-full size-[460px] flex items-center justify-center">
        {/* Second bordered circle (medium) */}
        <div className="absolute z-20 rounded-full border-2 border-[#E5D9CB] size-[362px] flex items-center justify-center">
          {/* First bordered circle (smallest) */}
          <div
            className="absolute z-30 rounded-full border-2 border-[#E4D8C5] size-[257px] flex items-center justify-center"
            style={{ boxShadow: "0 -2.09px 8.36px 10.45px #E1D9CE" }}
          >
            {/* Central content */}
            <div className="z-40 flex flex-col items-center acno_1 justify-center text-center bg-white/90 rounded-full size-[153px] ">
              <span className="text-sm text-[#513232]">Go to</span>
              <span className="text-xl font-bold text-[#513232]">TORVET</span>
            </div>
          </div>
        </div>
      </div>

      {/* First layer icons */}
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
            className="absolute z-35 transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="icon-container">
              <Image src={icon.src} alt={icon.alt} width={25} height={25} />
              {hoveredIcon && iconTargetMap[hoveredIcon]?.circle === "primary" && 
               iconTargetMap[hoveredIcon]?.index === index && (
                <div className="icon-glow"></div>
              )}
            </div>
          </div>
        );
      })}

      {/* Second layer icons */}
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
            className="absolute z-25 transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
                 mixBlendMode: "luminosity",
                  aspectRatio: "revert-layer",
            }}
          >
            <div className="icon-container">
              <Image src={icon.src} alt={icon.alt} width={25} height={25} />
              {hoveredIcon && iconTargetMap[hoveredIcon]?.circle === "secondary" && 
               iconTargetMap[hoveredIcon]?.index === index && (
                <div className="icon-glow"></div>
              )}
            </div>
          </div>
        );
      })}

      {/* Third layer icons */}
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
            className="absolute z-15 transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
                 mixBlendMode: "luminosity",
                  aspectRatio: "revert-layer",
            }}
          >
            <div className="icon-container">
              <Image src={icon.src} alt={icon.alt} width={20} height={20} />
              {hoveredIcon && iconTargetMap[hoveredIcon]?.circle === "tertiary" && 
               iconTargetMap[hoveredIcon]?.index === index && (
                <div className="icon-glow"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircularImages;