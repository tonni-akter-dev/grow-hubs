// 'use client'
// import React, { useState, useEffect } from 'react';
// import c1 from '../../../../public/home/c1.png'
// import c2 from '../../../../public/home/c2.png'
// import c3 from '../../../../public/home/c3.png'
// import c4 from '../../../../public/home/c4.png'
// import c5 from '../../../../public/home/c5.png'
// import c6 from '../../../../public/home/c6.png'
// import c7 from '../../../../public/home/c7.png'
// import c8 from '../../../../public/home/c8.png'
// import c9 from '../../../../public/home/c9.png'
// import c10 from '../../../../public/home/c10.png'
// import c11 from '../../../../public/home/c11.png'
// import c12 from '../../../../public/home/c12.png'

// const GotoTorvert = () => {
//   const [rotation, setRotation] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setRotation((prevRotation) => prevRotation + 1);
//     }, 50);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const primaryIcons = [
//     { label: "Courses", value: null, src: "/icons/courses.png" },
//     { label: "Short Videos", value: "33.6", src: "/icons/short-videos.png" },
//     { label: "Communities", value: null, src: "/icons/communities.png" },
//   ];

//   const secondaryLogos = [
//     { label: "Podcasts", value: null, src: "/icons/podcasts.png" },
//     { label: "Consultants", value: "267.09", src: "/icons/consultants.png" },
//     { label: "Blogs", value: null, src: "/icons/blogs.png" },
//     { label: "Threads", value: null, src: "/icons/threads.png" },
//     { label: "Webinars", value: null, src: "/icons/webinars.png" },
//     { label: "Live Streaming", value: null, src: "/icons/live-streaming.png" },
//     { label: "Assessments", value: null, src: "/icons/assessments.png" },
//     { label: "Merchandise", value: null, src: "/icons/merchandise.png" },
//   ];

//   const iconRadius = 150;
//   const secondaryLogoRadius = 220;

//   const handleMouseEnter = () => setIsPaused(true);
//   const handleMouseLeave = () => setIsPaused(false);

//   return (
//     <div
//       className="bg-[#041527] w-full h-screen flex items-center justify-center"
//       style={{ boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)' }}
//     >
//       <div className="relative w-full h-full flex items-center justify-center">
//         <div className="rounded-full bg-white/25 p-8 flex items-center justify-center">
//           <h1 className="text-4xl font-bold text-gray-800">Go to TORVET</h1>
//         </div>

//         {/* Primary rotating icons */}
//         {primaryIcons.map((icon, index) => {
//           const angle = (360 / primaryIcons.length) * index + rotation;
//           const x = iconRadius * Math.cos((angle * Math.PI) / 180);
//           const y = iconRadius * Math.sin((angle * Math.PI) / 180);
//           return (
//             <div
//               key={`primary-${index}`}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               className="absolute transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
//               style={{
//                 left: `calc(50% + ${x}px - 50px)`,
//                 top: `calc(50% + ${y}px - 50px)`,
//                 transform: `rotate(${angle}deg)`,
//               }}
//             >
//               <img src={icon.src} alt={icon.label} width={100} height={100} />
//               {icon.value && (
//                 <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-500 font-bold">
//                   {icon.value}
//                 </span>
//               )}
//               <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm">
//                 {icon.label}
//               </span>
//             </div>
//           );
//         })}

//         {/* Secondary rotating icons */}
//         {secondaryLogos.map((logo, index) => {
//           const angle = (360 / secondaryLogos.length) * index - rotation;
//           const x = secondaryLogoRadius * Math.cos((angle * Math.PI) / 180);
//           const y = secondaryLogoRadius * Math.sin((angle * Math.PI) / 180);
//           return (
//             <div
//               key={`secondary-${index}`}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               className="absolute transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
//               style={{
//                 left: `calc(50% + ${x}px - 40px)`,
//                 top: `calc(50% + ${y}px - 40px)`,
//                 transform: `rotate(${angle}deg)`,
//               }}
//             >
//               <img src={logo.src} alt={logo.label} width={25} height={25} />
//               {logo.value && (
//                 <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-500 font-bold">
//                   {logo.value}
//                 </span>
//               )}
//               <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
//                 {logo.label}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default GotoTorvert;

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';

const RotatingIcons = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//     //   setRotation((prevRotation) => prevRotation + 1);
//     }, 50);
//     return () => clearInterval(interval);
//   }, [isPaused]);

  const icons = [
    { src: "/home/c1.png", alt: "React Icon" },
    { src: "/home/c2.png", alt: "Java Icon" },
    { src: "/home/c3.png", alt: "Bootstrap Icon" },
  ];

  const secondaryLogos = [
    { src: "/home/c4.png", alt: "Logo 1" },
    { src: "/home/c5.png", alt: "Logo 2" },
    // { src: "/home/c6.png", alt: "Logo 3" },
    { src: "/home/c7.png", alt: "Logo 4" },
    { src: "/home/c8.png", alt: "Logo 5" },
    { src: "/home/c9.png", alt: "Logo 6" },
    { src: "/home/c10.png", alt: "Logo 7" },
    { src: "/home/c11.png", alt: "Logo 8" },
  ];

  const iconRadius = 150;
  const secondaryLogoRadius = 220;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div>
      <div className="relative w-full h-full flex items-center justify-center mt-20">
        <div className="rounded-full bg-white flex items-center justify-center">
          <div className="acno_4 flex justify-center items-center">
            <div className="acno_3 flex justify-center items-center">
              <div className="acno_2 size-[286px] border flex justify-center items-center rounded-full border-[#E6E6E8]">
                <div className="size-[185px] acno_1">
                  {/* <Image src={acnoo} alt="Acnoo Logo" className="acnoo_logo" />      */}
                  
                  kjiuhkj         </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary rotating icons */}
        {icons.map((icon, index) => {
          const angle = (360 / icons.length) * index + rotation;
          const x = iconRadius * Math.cos((angle * Math.PI) / 180);
          const y = iconRadius * Math.sin((angle * Math.PI) / 180);
          return (
            <Image
              key={`primary-${index}`}
              src={icon.src}
              width={25}
              height={25}
              alt={icon.alt}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
              style={{
                left: `calc(48% + ${x}px - 67px)`,
                top: `calc(48% + ${y}px - 65px)`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}

        {/* Secondary rotating icons */}
        {secondaryLogos.map((logo, index) => {
          const angle = (360 / secondaryLogos.length) * index - rotation;
          const x = secondaryLogoRadius * Math.cos((angle * Math.PI) / 180);
          const y = secondaryLogoRadius * Math.sin((angle * Math.PI) / 180);
          return (
            <Image
              key={`secondary-${index}`}
              src={logo.src}
              width={25}
              height={25}
              alt={logo.alt}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
              style={{
                left: `calc(50% + ${x}px - 50px)`,
                top: `calc(50% + ${y}px - 50px)`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const MobileRotatingIcons = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

    const icons = [
    { src: "/home/c1.png", alt: "React Icon" },
    { src: "/home/c2.png", alt: "Java Icon" },
    { src: "/home/c3.png", alt: "Bootstrap Icon" },
  ];

  const secondaryLogos = [
    { src: "/home/c4.png", alt: "Logo 1" },
    { src: "/home/c5.png", alt: "Logo 2" },
    { src: "/home/c6.png", alt: "Logo 3" },
    { src: "/home/c7.png", alt: "Logo 4" },
    { src: "/home/c8.png", alt: "Logo 5" },
    { src: "/home/c9.png", alt: "Logo 6" },
    { src: "/home/c10.png", alt: "Logo 7" },
    { src: "/home/c11.png", alt: "Logo 8" },
  ];

  const iconRadius = 25;
  const secondaryLogoRadius = 120;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center z-10">
      <div className="rounded-full bg-white flex items-center justify-center">
        <div className="acno_4 flex justify-center items-center">
          <div className="acno_3 flex justify-center items-center">
            <div className="acno_2 size-[200px] border flex justify-center items-center rounded-full border-[#E6E6E8]">
              <div className="size-[120px] acno_1">
                {/* <Image src={acnoo} alt="Acnoo Logo" /> */}
                ljhkjoijpo/l[9-ko[,l]]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary rotating icons */}
      {icons.map((icon, index) => {
        const angle = (360 / icons.length) * index + rotation;
        const x = iconRadius * Math.cos((angle * Math.PI) / 180);
        const y = iconRadius * Math.sin((angle * Math.PI) / 180);
        return (
          <Image
            key={`mobile-primary-${index}`}
            src={icon.src}
            width={25}
            height={25}
            alt={icon.alt}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
            style={{
              left: `calc(48% + ${x}px - 40px)`,
              top: `calc(48% + ${y}px - 40px)`,
              transform: `rotate(${angle}deg)`,
            }}
          />
        );
      })}

      {/* Secondary rotating icons */}
      {secondaryLogos.map((logo, index) => {
        const angle = (360 / secondaryLogos.length) * index - rotation;
        const x = secondaryLogoRadius * Math.cos((angle * Math.PI) / 180);
        const y = secondaryLogoRadius * Math.sin((angle * Math.PI) / 180);
        return (
          <Image
            key={`mobile-secondary-${index}`}
            src={logo.src}
            width={60}
            height={60}
            alt={logo.alt}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
            style={{
              left: `calc(50% + ${x}px - 30px)`,
              top: `calc(50% + ${y}px - 30px)`,
              transform: `rotate(${angle}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

const GotoTorvert = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="">
      
      <div className="relative">
        <div className="lg:block tab md:block hidden">
          <RotatingIcons />
        </div>
        <div className="lg:hidden mobile md:hidden block">
          {/* <MobileRotatingIcons></MobileRotatingIcons> */}
        </div>
      </div>
    </div>
  );
};

export default GotoTorvert;

