import React from "react";
import creatorrightball from "../../../../public/home/creator-right-ball.png";
import creatorleftball from "../../../../public/home/creator-left-ball.png";
import Image from "next/image";

const SocialInteractions = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-[120px] bg-[linear-gradient(180deg,#E8F1FD_0%,#E3F1FA_28.69%,#F5F9EC_73.37%,#FDF4E7_85.69%)] relative">
      <Image className="absolute right-0 top-0" src={creatorrightball} alt="" />
      <Image
        className="absolute left-0 bottom-10"
        src={creatorleftball}
        alt=""
      />

      <button className="text-neutral-13 text-h6 font-bold uppercase py-3 px-3.5 bg-[linear-gradient(268deg,#CEE9FF_1.17%,#A0DBFF_98.05%)] rounded-[100px]">
        Not Just Social. Truly Supportive
      </button>
      <h2 className="text-neutral-13 font-bold leading-[110%] lg:text-display text-h3">
        Creators over algorithms
      </h2>
      <p className="text-neutral-9  font-medium text-h6 leading-[150%] text-center">
        Growhubs is built on collaboration — no data <br /> mining, no ad
        chasing, just growth.
      </p>
      <h2 className="text-[#575757] text-[44px] font-semibold">We are not</h2>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="307"
          height="47"
          viewBox="0 0 307 47"
          fill="none"
        >
          <g filter="url(#filter0_g_2741_4105)">
            <path
              d="M4.17354 42V5.6H27.2095V12.62H12.3895V20.992H25.7535V28.012H12.3895V42H4.17354ZM30.1662 42L42.5422 5.6H53.0462L65.5782 42H56.8422L54.6582 35.552H40.7222L38.5902 42H30.1662ZM42.9582 28.22H52.4222L47.9502 14.648H47.4822L42.9582 28.22ZM88.65 42.676C77.262 42.676 69.514 34.564 69.514 23.8C69.514 13.088 77.314 4.924 88.65 4.924C98.53 4.924 105.186 11.112 106.746 19.12H97.802C96.814 15.532 93.33 12.828 88.65 12.828C82.358 12.828 78.042 17.56 78.042 23.8C78.042 30.144 82.358 34.772 88.65 34.772C93.33 34.772 96.762 32.12 98.114 28.636H107.11C105.55 36.644 98.426 42.676 88.65 42.676ZM115.313 42V5.6H138.349V12.62H123.529V20.16H136.165V27.18H123.529V34.928H138.921V42H115.313ZM147.113 42V5.6H161.361C168.537 5.6 172.645 9.76 172.645 15.272C172.645 18.548 171.033 21.148 168.537 22.656V22.968C170.929 24.06 173.841 26.66 173.841 31.34C173.841 38.1 168.433 42 162.453 42H147.113ZM154.965 20.212H160.269C162.973 20.212 164.585 18.496 164.585 16.104C164.585 13.868 162.869 12.308 160.321 12.308H154.965V20.212ZM154.965 35.084H160.269C163.129 35.084 165.105 33.628 165.105 30.508C165.105 27.544 162.817 26.14 160.165 26.14H154.965V35.084ZM199.541 42.676C188.361 42.676 180.197 34.564 180.197 23.8C180.197 13.088 188.413 4.924 199.541 4.924C210.669 4.924 218.885 13.192 218.885 23.8C218.885 34.46 210.617 42.676 199.541 42.676ZM199.541 34.772C205.833 34.772 210.305 30.092 210.305 23.8C210.305 17.612 205.833 12.828 199.541 12.828C193.197 12.828 188.725 17.612 188.725 23.8C188.725 30.092 193.197 34.772 199.541 34.772ZM244.949 42.676C233.769 42.676 225.605 34.564 225.605 23.8C225.605 13.088 233.821 4.924 244.949 4.924C256.077 4.924 264.293 13.192 264.293 23.8C264.293 34.46 256.025 42.676 244.949 42.676ZM244.949 34.772C251.241 34.772 255.713 30.092 255.713 23.8C255.713 17.612 251.241 12.828 244.949 12.828C238.605 12.828 234.133 17.612 234.133 23.8C234.133 30.092 238.605 34.772 244.949 34.772ZM302.37 42H292.854L284.378 26.556L280.738 30.872V42H272.522V5.6H280.738V19.484H281.05L292.022 5.6H302.162L290.046 19.9L302.37 42Z"
              fill="#4179B9"
            />
          </g>
          <defs>
            <filter
              id="filter0_g_2741_4105"
              x="0.173828"
              y="0.924072"
              width="306.195"
              height="45.752"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01785714365541935 0.01785714365541935"
                numOctaves="3"
                seed="5475"
              />
              <feDisplacementMap
                in="shape"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacedImage"
                width="100%"
                height="100%"
              />
              <feMerge result="effect1_texture_2741_4105">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SocialInteractions;
