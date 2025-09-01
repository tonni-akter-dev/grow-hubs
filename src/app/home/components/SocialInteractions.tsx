// 'use client'
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import creatorrightball from "../../../../public/home/creator-right-ball.png";
// import creatorleftball from "../../../../public/home/creator-left-ball.png";
// import IconsSlider from "./IconsSlider";
// import ReactTypingEffect from "react-typing-effect";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";

// const SocialInteractions = () => {
//   const rightBallRef = useRef<HTMLDivElement | null>(null);
//   const leftBallRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (rightBallRef.current && leftBallRef.current) {
//       rightBallRef.current.animate(
//         [
//           { transform: "translateX(0) translateY(0)" },
//           { transform: "translateX(-300px) translateY(200px)" },
//           { transform: "translateX(-600px) translateY(30px)" },
//           { transform: "translateX(-900px) translateY(400px)" },
//           { transform: "translateX(-1200px) translateY(200px)" },
//           { transform: "translateX(-1400px) translateY(0)" },
//         ],
//         {
//           duration: 14000,
//           iterations: Infinity,
//           direction: "alternate",
//           easing: "ease-in-out",
//         }
//       );
//       leftBallRef.current.animate(
//         [
//           { transform: "translateX(0) translateY(0)" },
//           { transform: "translateX(300px) translateY(-300px)" },
//           { transform: "translateX(600px) translateY(20px)" },
//           { transform: "translateX(900px) translateY(-450px)" },
//           { transform: "translateX(1200px) translateY(15px)" },
//           { transform: "translateX(1400px) translateY(0)" },
//         ],
//         {
//           duration: 14000,
//           iterations: Infinity,
//           direction: "alternate",
//           easing: "ease-in-out",
//         }
//       );
//     }
//   }, []);
//   const [stage, setStage] = useState("first");

//   return (
//     <div className="flex flex-col items-center py-[60px] lg:py-[120px] bg-[linear-gradient(180deg,#E8F1FD_0%,#E3F1FA_28.69%,#F5F9EC_73.37%,#FDF4E7_85.69%)] relative overflow-hidden text-center">
//       <div ref={rightBallRef} className="absolute right-0 top-10">
//         <Image
//           src={creatorrightball}
//           alt=""
//           className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
//         />
//       </div>
//       <div ref={leftBallRef} className="absolute left-0 bottom-16">
//         <Image
//           src={creatorleftball}
//           alt=""
//           className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
//         />
//       </div>
//       <button className="mb-4 text-neutral-13 text-caption lg:text-h6 font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(268deg,#CEE9FF_1.17%,#A0DBFF_98.05%)] rounded-[100px]">
//         Not Just Social. Truly Supportive
//       </button>
//       <h2 className="text-neutral-13 font-bold leading-[110%] lg:text-display text-h3 mb-4">
//         Creators over <br className="lg:hidden block" /> algorithms
//       </h2>
//       <p className="text-neutral-9 font-medium text-body-sm lg:text-h6 leading-[150%] text-center mb-4">
//         Growhubs is built on collaboration — no data <br /> mining, no ad
//         chasing, just growth.
//       </p>

//       {/* <h2 className="text-[#575757] text-h5 lg:text-[44px] font-semibold">We are not</h2>

//         <IconsSlider /> */}
//       {stage === "first" ? (
//         <>
//           <ReactTypingEffect
//             text={["We are not"]}
//             speed={100}
//             eraseDelay={5000}
//             typingDelay={200}
//             className="text-[#575757] text-h5 lg:text-[44px] font-semibold"
//           />
//           <IconsSlider onComplete={() => setStage("second")} />
//         </>
//       ) : (
//         <>
//           <ReactTypingEffect
//             text={["Here, your data rewards you"]}
//             speed={100}
//             eraseDelay={5000}
//             typingDelay={200}
//             className="text-[#575757] text-h5 lg:text-[44px] font-semibold"
//           />
//           <NotThemSlider />
//         </>
//       )}

//       <button className=" text-white mt-[34px] text-body-sm lg:text-body font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(267deg,#E0AB70_0.92%,#BFA680_98.03%)] rounded-[100px]">
//         Start for free - No credit card needed
//       </button>
//     </div>
//   );
// };

// export default SocialInteractions;

// const NotThemSlider = () => {
//   return (
//     <Swiper
//       direction="vertical"
//       slidesPerView={1}
//       autoplay={{ delay: 2000, disableOnInteraction: false }}
//       modules={[Autoplay]}
//       loop={true}
//       speed={300}
//       className="h-16"
//     >
//       <SwiperSlide>
//         <h3 className="text-red-500 font-bold">NOT THEM - 1</h3>
//       </SwiperSlide>
//       <SwiperSlide>
//         <h3 className="text-red-500 font-bold">NOT THEM - 2</h3>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import creatorrightball from "../../../../public/home/creator-right-ball.png";
import creatorleftball from "../../../../public/home/creator-left-ball.png";
import IconsSlider from "./IconsSlider";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const SocialInteractions = () => {
  const rightBallRef = useRef<HTMLDivElement | null>(null);
  const leftBallRef = useRef<HTMLDivElement | null>(null);
  const [stage, setStage] = useState("first");
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    if (rightBallRef.current && leftBallRef.current) {
      rightBallRef.current.animate(
        [
          { transform: "translateX(0) translateY(0)" },
          { transform: "translateX(-300px) translateY(200px)" },
          { transform: "translateX(-600px) translateY(30px)" },
          { transform: "translateX(-900px) translateY(400px)" },
          { transform: "translateX(-1200px) translateY(200px)" },
          { transform: "translateX(-1400px) translateY(0)" },
        ],
        {
          duration: 14000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
      leftBallRef.current.animate(
        [
          { transform: "translateX(0) translateY(0)" },
          { transform: "translateX(300px) translateY(-300px)" },
          { transform: "translateX(600px) translateY(20px)" },
          { transform: "translateX(900px) translateY(-450px)" },
          { transform: "translateX(1200px) translateY(15px)" },
          { transform: "translateX(1400px) translateY(0)" },
        ],
        {
          duration: 14000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
    }
  }, []);

  const handleIconsSliderComplete = () => {
    setStage("second");
    setTimeout(() => setShowSecondText(true), 500);
  };

  return (
    <div className="flex flex-col items-center py-[60px] lg:py-[120px] bg-[linear-gradient(180deg,#E8F1FD_0%,#E3F1FA_28.69%,#F5F9EC_73.37%,#FDF4E7_85.69%)] relative overflow-hidden text-center">
      <div ref={rightBallRef} className="absolute right-0 top-10">
        <Image
          src={creatorrightball}
          alt=""
          className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
        />
      </div>
      <div ref={leftBallRef} className="absolute left-0 bottom-16">
        <Image
          src={creatorleftball}
          alt=""
          className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
        />
      </div>

      <button className="mb-4 text-neutral-13 text-caption lg:text-h6 font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(268deg,#CEE9FF_1.17%,#A0DBFF_98.05%)] rounded-[100px]">
        Not Just Social. Truly Supportive
      </button>

      <h2 className="text-neutral-13 font-bold leading-[110%] lg:text-display text-h3 mb-4">
        Creators over <br className="lg:hidden block" /> algorithms
      </h2>

      <p className="text-neutral-9 font-medium text-body-sm lg:text-h6 leading-[150%] text-center mb-4">
        Growhubs is built on collaboration — no data <br /> mining, no ad
        chasing, just growth.
      </p>

      <div className="min-h-[60px] flex items-center justify-center">
        {stage === "first" ? (
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 100,
              deleteSpeed: 0,
              cursor: "|"}}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="text-[#575757] text-h5 lg:text-[44px] font-semibold">We are not</span>')
                .start();
            }}
          />
        ) : (
          showSecondText && (
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 100,
                deleteSpeed: 0,
                cursor: "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-[#575757] text-h5 lg:text-[44px] font-semibold">Here, your data rewards you</span>')
                  .start();
              }}
            />
          )
        )}
      </div>

      <div className="h-16 overflow-hidden my-4">
        {stage === "first" ? (
          <IconsSlider onComplete={handleIconsSliderComplete} />
        ) : (
          <NotThemSlider />
        )}
      </div>

      <button className="text-white mt-[34px] text-body-sm lg:text-body font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(267deg,#E0AB70_0.92%,#BFA680_98.03%)] rounded-[100px]">
        Start for free - No credit card needed
      </button>
    </div>
  );
};

export default SocialInteractions;

const NotThemSlider = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Autoplay]}
      loop={true}
      speed={300}
      className="h-full">
      <SwiperSlide className="w-[364px] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="290" height="47" viewBox="0 0 290 47" fill="none">
          <g filter="url(#filter0_g_2741_4135)">
            <path d="M4.48604 42V5.6H13.586L27.522 28.48H27.834V5.6H35.79V42H26.638L12.754 19.12H12.442V42H4.48604ZM63.4142 42.676C52.2342 42.676 44.0702 34.564 44.0702 23.8C44.0702 13.088 52.2862 4.924 63.4142 4.924C74.5422 4.924 82.7582 13.192 82.7582 23.8C82.7582 34.46 74.4902 42.676 63.4142 42.676ZM63.4142 34.772C69.7062 34.772 74.1782 30.092 74.1782 23.8C74.1782 17.612 69.7062 12.828 63.4142 12.828C57.0702 12.828 52.5982 17.612 52.5982 23.8C52.5982 30.092 57.0702 34.772 63.4142 34.772ZM97.9272 42V12.724H87.7872V5.6H116.387V12.724H106.195V42H97.9272ZM147.916 42V12.724H137.776V5.6H166.376V12.724H156.184V42H147.916ZM173.943 42V5.6H182.159V19.692H196.667V5.6H204.935V42H196.667V27.596H182.159V42H173.943ZM214.68 42V5.6H237.716V12.62H222.896V20.16H235.532V27.18H222.896V34.928H238.288V42H214.68ZM246.479 42V5.6H256.619L266.447 30.3H266.759L275.391 5.6H285.583V42H277.627V21.408H277.315L269.723 42H263.119L254.695 20.576H254.383V42H246.479Z" fill="#4179B9" />
          </g>
          <defs>
            <filter id="filter0_g_2741_4135" x="0.486328" y="0.924072" width="289.098" height="45.752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="0.01785714365541935 0.01785714365541935" numOctaves="3" seed="5475" />
              <feDisplacementMap in="shape" scale="8" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
              <feMerge result="effect1_texture_2741_4135">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </SwiperSlide>
    </Swiper>
  );
};