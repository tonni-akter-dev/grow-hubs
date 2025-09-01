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
import { useInView } from "framer-motion";
import NotThemSlider from "./NotThemSlider";

const SocialInteractions = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rightBallRef = useRef<HTMLDivElement | null>(null);
  const leftBallRef = useRef<HTMLDivElement | null>(null);
  const [stage, setStage] = useState("first");
  const [showSecondText, setShowSecondText] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setStartAnimations(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (startAnimations && rightBallRef.current && leftBallRef.current) {
      rightBallRef.current.animate(
        [
          { transform: "translateX(0) translateY(0)" },
          { transform: "translateX(-300px) translateY(540px)" },
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
          { transform: "translateX(0px) translateY(-60px)" },
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
  }, [startAnimations]);

  const handleIconsSliderComplete = () => {
    setStage("second");
    setTimeout(() => setShowSecondText(true), 500);
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center py-[60px] lg:py-[120px] bg-[linear-gradient(180deg,#E8F1FD_0%,#E3F1FA_28.69%,#F5F9EC_73.37%,#FDF4E7_85.69%)] relative overflow-hidden text-center"
    >
      {startAnimations && (
        <>
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
        </>
      )}

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
        {startAnimations && stage === "first" ? (
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
                .typeString('<span class="text-[#575757] text-h5 lg:text-[44px] font-semibold">We are not</span>')
                .start();
            }}
          />
        ) : (
          startAnimations &&
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
        {startAnimations &&
          (stage === "first" ? (
            <IconsSlider onComplete={handleIconsSliderComplete} />
          ) : (
            <NotThemSlider />
          ))}
      </div>

      <button className="text-white mt-[34px] text-body-sm lg:text-body font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(267deg,#E0AB70_0.92%,#BFA680_98.03%)] rounded-[100px]">
        Start for free - No credit card needed
      </button>
    </div>
  );
};

export default SocialInteractions;