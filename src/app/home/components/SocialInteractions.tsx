// 'use client'
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import creatorrightball from "../../../../public/home/creator-right-ball.png";
// import creatorleftball from "../../../../public/home/creator-left-ball.png";
// import IconsSlider from "./IconsSlider";
// import Typewriter from "typewriter-effect";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { useInView } from "framer-motion";
// import NotThemSlider from "./NotThemSlider";

// const SocialInteractions = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const rightBallRef = useRef<HTMLDivElement | null>(null);
//   const leftBallRef = useRef<HTMLDivElement | null>(null);

//   const [stage, setStage] = useState<"first" | "second">("first");
//   const [showSecondText, setShowSecondText] = useState(false);
//   const [startAnimations, setStartAnimations] = useState(false);
//   const [typingFinished, setTypingFinished] = useState(false);
//   const [secondTypingFinished, setSecondTypingFinished] = useState(false);

//   // 🔑 Restart Typewriter each cycle
//   const [resetKey, setResetKey] = useState(0);

//   const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

//   useEffect(() => {
//     if (isInView) setStartAnimations(true);
//   }, [isInView]);

//   useEffect(() => {
//     if (startAnimations && rightBallRef.current && leftBallRef.current) {
//       rightBallRef.current.animate(
//         [
//           { transform: "translateX(0) translateY(0)" },
//           { transform: "translateX(-300px) translateY(540px)" },
//           { transform: "translateX(-600px) translateY(30px)" },
//           { transform: "translateX(-900px) translateY(400px)" },
//           { transform: "translateX(-1200px) translateY(200px)" },
//           { transform: "translateX(-1400px) translateY(0)" },
//         ],
//         { duration: 14000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }
//       );
//       leftBallRef.current.animate(
//         [
//           { transform: "translateX(0px) translateY(0px)" },
//           { transform: "translateX(150px) translateY(-500px)" },
//           { transform: "translateX(200px) translateY(300px)" },
//           { transform: "translateX(200px) translateY(200px)" },
//           { transform: "translateX(200px) translateY(150px)" },
//           { transform: "translateX(200px) translateY(0)" },
//         ],
//         { duration: 14000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }
//       );
//     }
//   }, [startAnimations]);

//   // When first slider finishes → move to second stage
//   const handleIconsSliderComplete = () => {
//     setStage("second");
//     setTimeout(() => setShowSecondText(true), 500);
//   };

//   // When second slider finishes → restart loop (with typing again)
//   const handleNotThemComplete = () => {
//     setTimeout(() => {
//       setStage("first");
//       setShowSecondText(false);
//       setTypingFinished(false);
//       setSecondTypingFinished(false);
//       setResetKey((prev) => prev + 1); // reset typewriter
//     }, 1000);
//   };

//   return (
//     <div
//       ref={sectionRef}
//       className="flex flex-col items-center py-[60px] lg:py-[120px] bg-[linear-gradient(180deg,#E8F1FD_0%,#E3F1FA_28.69%,#F5F9EC_73.37%,#FDF4E7_85.69%)] relative overflow-hidden text-center"
//     >
//       {/* Floating Balls */}
//       {startAnimations && (
//         <>
//           <div ref={rightBallRef} className="absolute right-0 top-10">
//             <Image src={creatorrightball} alt="" className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36" />
//           </div>
//           <div ref={leftBallRef} className="absolute left-0 bottom-16">
//             <Image src={creatorleftball} alt="" className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36" />
//           </div>
//         </>
//       )}

//       {/* Badge */}
//       <button className="mb-4 text-neutral-13 text-caption lg:text-h6 font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(268deg,#CEE9FF_1.17%,#A0DBFF_98.05%)] rounded-[100px]">
//         Not Just Social. Truly Supportive
//       </button>

//       {/* Heading */}
//       <h2 className="text-neutral-13 font-bold leading-[110%] lg:text-display text-h3 mb-4">
//         Creators over <br className="lg:hidden block" /> algorithms
//       </h2>

//       <p className="text-neutral-9 font-medium text-body-sm lg:text-h6 leading-[150%] text-center mb-4">
//         Growhubs is built on collaboration — no data <br /> mining, no ad chasing, just growth.
//       </p>

//       {/* Typewriter Section */}
//       <div className="min-h-[60px] flex items-center justify-center">
//         {startAnimations && stage === "first" && (
//           <Typewriter
//             key={resetKey}
//             options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 0, cursor: "|" }}
//             onInit={(typewriter) => {
//               typewriter
//                 .typeString('<span class="text-[#575757] text-h5 lg:text-[44px] font-semibold">We are not</span>')
//                 .callFunction(() => setTypingFinished(true))
//                 .start();
//             }}
//           />
//         )}

//         {startAnimations && stage === "second" && showSecondText && (
//           <Typewriter
//             key={resetKey + 1}
//             options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 0, cursor: "|" }}
//             onInit={(typewriter) => {
//               typewriter
//                 .typeString('<span class="text-[#575757] text-h5 lg:text-[44px] font-semibold">Here, your data rewards you</span>')
//                 .callFunction(() => setSecondTypingFinished(true))
//                 .start();
//             }}
//           />
//         )}
//       </div>

//       {/* Slider Section */}
//       <div className="h-16 overflow-hidden my-4">
//         {startAnimations &&
//           (stage === "first"
//             ? typingFinished && <IconsSlider onComplete={handleIconsSliderComplete} />
//             : secondTypingFinished && <NotThemSlider onComplete={handleNotThemComplete} />)}
//       </div>

//       {/* CTA Button */}
//       <button className="text-white mt-[34px] text-body-sm lg:text-body font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(267deg,#E0AB70_0.92%,#BFA680_98.03%)] rounded-[100px]">
//         Start for free - No credit card needed
//       </button>
//     </div>
//   );
// };

// export default SocialInteractions;


'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import creatorrightball from "../../../../public/home/creator-right-ball.png";
import creatorleftball from "../../../../public/home/creator-left-ball.png";
import IconsSlider from "./IconsSlider";
import Typewriter from "typewriter-effect";
import "swiper/css";
import "swiper/css/autoplay";
import { useInView } from "framer-motion";
import NotThemSlider from "./NotThemSlider";

const SocialInteractions = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rightBallRef = useRef<HTMLDivElement | null>(null);
  const leftBallRef = useRef<HTMLDivElement | null>(null);

  const [stage, setStage] = useState<"first" | "second">("first");
  const [showSecondText, setShowSecondText] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);
  const [typingFinished, setTypingFinished] = useState(false);
  const [secondTypingFinished, setSecondTypingFinished] = useState(false);

  // 🔑 New cycle counter to reset everything in a loop
  const [cycleKey, setCycleKey] = useState(0);

  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  useEffect(() => {
    if (isInView) setStartAnimations(true);
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
        { duration: 14000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }
      );
      leftBallRef.current.animate(
        [
          { transform: "translateX(0px) translateY(0px)" },
          { transform: "translateX(150px) translateY(-500px)" },
          { transform: "translateX(200px) translateY(300px)" },
          { transform: "translateX(200px) translateY(200px)" },
          { transform: "translateX(200px) translateY(150px)" },
          { transform: "translateX(200px) translateY(0)" },
        ],
        { duration: 14000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }
      );
    }
  }, [startAnimations]);

  // When first slider finishes → move to second stage
  const handleIconsSliderComplete = () => {
    setStage("second");
    setTimeout(() => setShowSecondText(true), 500);
  };

  // When second slider finishes → restart whole cycle
  const handleNotThemComplete = () => {
    setTimeout(() => {
      setStage("first");
      setShowSecondText(false);
      setTypingFinished(false);
      setSecondTypingFinished(false);
      setCycleKey((prev) => prev + 1); // reset EVERYTHING
    }, 1000);
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center py-[60px] lg:py-[120px] bg-[linear-gradient(180deg,#E8F1FD_0%,#E3F1FA_28.69%,#F5F9EC_73.37%,#FDF4E7_85.69%)] relative overflow-hidden text-center"
    >
      {/* Floating Balls */}
      {startAnimations && (
        <>
          <div ref={rightBallRef} className="absolute right-0 top-10">
            <Image src={creatorrightball} alt="" className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36" />
          </div>
          <div ref={leftBallRef} className="absolute left-0 bottom-16">
            <Image src={creatorleftball} alt="" className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36" />
          </div>
        </>
      )}

      {/* Badge */}
      <button className="mb-4 text-neutral-13 text-caption lg:text-h6 font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(268deg,#CEE9FF_1.17%,#A0DBFF_98.05%)] rounded-[100px]">
        Not Just Social. Truly Supportive
      </button>

      {/* Heading */}
      <h2 className="text-neutral-13 font-bold leading-[110%] lg:text-display text-h3 mb-4">
        Creators over <br className="lg:hidden block" /> algorithms
      </h2>

      <p className="text-neutral-9 font-medium text-body-sm lg:text-h6 leading-[150%] text-center mb-4">
        Growhubs is built on collaboration — no data <br /> mining, no ad chasing, just growth.
      </p>

      {/* Typewriter Section */}
      <div className="min-h-[60px] flex items-center justify-center">
        {startAnimations && stage === "first" && (
          <Typewriter
            key={`first-${cycleKey}`}
            options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 0, cursor: "|" }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="text-[#575757] text-h5 lg:text-[44px] font-semibold">We are not</span>')
                .callFunction(() => setTypingFinished(true))
                .start();
            }}
          />
        )}

        {startAnimations && stage === "second" && showSecondText && (
          <Typewriter
            key={`second-${cycleKey}`}
            options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 0, cursor: "|" }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="text-[#575757] text-h5 lg:text-[44px] font-semibold">Here, your data rewards you</span>')
                .callFunction(() => setSecondTypingFinished(true))
                .start();
            }}
          />
        )}
      </div>

      {/* Slider Section */}
      <div className="h-16 overflow-hidden my-4">
        {startAnimations &&
          (stage === "first"
            ? typingFinished && <IconsSlider key={`icons-${cycleKey}`} onComplete={handleIconsSliderComplete} />
            : secondTypingFinished && <NotThemSlider key={`notthem-${cycleKey}`} onComplete={handleNotThemComplete} />)}
      </div>

      {/* CTA Button */}
      <button className="text-white mt-[34px] text-body-sm lg:text-body font-bold uppercase py-2.5 lg:py-3 px-3.5 bg-[linear-gradient(267deg,#E0AB70_0.92%,#BFA680_98.03%)] rounded-[100px]">
        Start for free - No credit card needed
      </button>
    </div>
  );
};

export default SocialInteractions;
