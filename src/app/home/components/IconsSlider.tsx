"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useRef } from "react";

interface IconsSliderProps {
  onComplete?: () => void;
}

const IconsSlider: React.FC<IconsSliderProps> = ({ onComplete }) => {
  const swiperRef = useRef(null);
  const slideCount = 6;
  const autoplayDelay = 2000;
  const completedRef = useRef(false);

  useEffect(() => {
    const totalTime = slideCount * autoplayDelay;

    const timer = setTimeout(() => {
      if (!completedRef.current && onComplete) {
        completedRef.current = true;
        onComplete();
      }
    }, totalTime + 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="creators h-16 overflow-hidden">
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="h-full"
        speed={300}
        onSlideChange={(swiper) => {
          if (
            swiper.activeIndex === slideCount - 1 &&
            !completedRef.current &&
            onComplete
          ) {
            completedRef.current = true;
            onComplete();
          }
        }}
      >
        <SwiperSlide className="w-[364px] flex items-center justify-center">
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
                colorInterpolationFilters="sRGB"
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
        </SwiperSlide>
        <SwiperSlide className="w-[364px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="49"
            viewBox="0 0 356 49"
            fill="none"
          >
            <g filter="url(#filter0_g_2741_4108)">
              <path
                d="M4.82416 44V4.8H13.6722V44H4.82416ZM24.1945 44V4.8H33.9945L49.0025 29.44H49.3385V4.8H57.9065V44H48.0505L33.0985 19.36H32.7625V44H24.1945ZM81.4396 44.728C71.9196 44.728 66.0956 39.296 66.1516 31.232H74.6076C74.7756 34.312 77.2396 36.608 81.7196 36.608C85.4156 36.608 87.5996 35.208 87.5996 32.744C87.5996 25.464 67.1596 31.96 67.1596 15.832C67.1596 9.28 72.2556 4.072 81.2716 4.072C89.4476 4.072 95.4956 8.272 95.8316 16.56H86.9836C86.9276 13.872 84.9116 11.968 81.2716 11.968C77.7996 11.968 76.0076 13.536 76.0076 15.608C76.0076 22.552 96.8396 16.224 96.8396 32.072C96.8396 39.352 91.2956 44.728 81.4396 44.728ZM113.886 44V12.472H102.966V4.8H133.766V12.472H122.79V44H113.886ZM135.607 44L148.935 4.8H160.247L173.743 44H164.335L161.983 37.056H146.975L144.679 44H135.607ZM149.383 29.16H159.575L154.759 14.544H154.255L149.383 29.16ZM198.645 44.728C186.381 44.728 177.981 35.992 177.981 24.4C177.981 12.864 186.437 4.072 198.645 4.072C208.949 4.072 216.173 10.344 218.077 18.464H208.277C206.989 15.104 203.517 12.584 198.645 12.584C191.701 12.584 187.165 17.68 187.165 24.4C187.165 31.288 191.701 36.44 198.645 36.44C204.189 36.44 208.221 33.472 208.949 29.888H198.253V22.608H218.805C219.309 36.384 211.021 44.728 198.645 44.728ZM227.687 44V4.8H243.031C251.039 4.8 256.919 10.064 256.919 17.736C256.919 23 253.951 27.144 249.975 29.16L258.319 44H248.463L241.799 30.896H236.535V44H227.687ZM236.535 23.336H242.247C245.439 23.336 247.847 21.376 247.847 17.736C247.847 14.488 245.607 12.36 242.135 12.36H236.535V23.336ZM263.608 44L276.936 4.8H288.248L301.744 44H292.336L289.984 37.056H274.976L272.680 44H263.608ZM277.384 29.16H287.576L282.760 14.544H282.256L277.384 29.16ZM309.138 44V4.8H320.058L330.642 31.4H330.978L340.274 4.8H351.250V44H342.682V21.824H342.346L334.170 44H327.058L317.986 20.928H317.650V44H309.138Z"
                fill="#4193B9"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_2741_4108"
                x="0.824219"
                y="0.0720215"
                width="354.426"
                height="48.656"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
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
                <feMerge result="effect1_texture_2741_4108">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </SwiperSlide>
        <SwiperSlide className="w-[364px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="276"
            height="48"
            viewBox="0 0 276 48"
            fill="none"
          >
            <g filter="url(#filter0_g_2741_4109)">
              <path
                d="M4.80618 44V4.8H13.6542V36.104H28.9982V44H4.80618ZM37.6843 44V4.8H46.5323V44H37.6843ZM57.0546 44V4.8H66.8546L81.8626 29.44H82.1986V4.8H90.7666V44H80.9106L65.9586 19.36H65.6226V44H57.0546ZM133.452 44H123.204L114.076 27.368L110.156 32.016V44H101.308V4.8H110.156V19.752H110.492L122.308 4.8H133.228L120.180 20.2L133.452 44ZM141.241 44V4.8H166.049V12.36H150.089V20.48H163.697V28.04H150.089V36.384H166.665V44H141.241ZM175.486 44V4.8H189.43C201.974 4.8 209.590 12.808 209.590 24.232C209.590 36.384 201.974 44 189.430 44H175.486ZM184.334 36.328H189.038C194.750 36.328 200.350 33.136 200.350 24.232C200.350 15.776 194.806 12.472 189.038 12.472H184.334V36.328ZM218.098 44V4.8H226.946V44H218.098ZM237.469 44V4.8H247.269L262.277 29.44H262.613V4.8H271.181V44H261.325L246.373 19.36H246.037V44H237.469Z"
                fill="#4193B9"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_2741_4109"
                x="0.806641"
                y="0.800049"
                width="274.373"
                height="47.2"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
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
                <feMerge result="effect1_texture_2741_4109">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </SwiperSlide>
        <SwiperSlide className="w-[364px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="244"
            height="49"
            viewBox="0 0 244 49"
            fill="none"
          >
            <g filter="url(#filter0_g_2741_4110)">
              <path
                d="M15.6726 44V12.472H4.75262V4.8H35.5526V12.472H24.5766V44H15.6726ZM43.7015 44V4.8H52.5495V44H43.7015ZM95.2158 44H84.9678L75.8398 27.368L71.9198 32.016V44H63.0718V4.8H71.9198V19.752H72.2558L84.0718 4.8H94.9918L81.9438 20.2L95.2158 44ZM99.4784 30.56V23.224H115.494V30.56H99.4784ZM131.654 44V12.472H120.734V4.8H151.534V12.472H140.558V44H131.654ZM177.797 44.728C165.757 44.728 156.965 35.992 156.965 24.4C156.965 12.864 165.813 4.072 177.797 4.072C189.781 4.072 198.629 12.976 198.629 24.4C198.629 35.88 189.725 44.728 177.797 44.728ZM177.797 36.216C184.573 36.216 189.389 31.176 189.389 24.4C189.389 17.736 184.573 12.584 177.797 12.584C170.965 12.584 166.149 17.736 166.149 24.4C166.149 31.176 170.965 36.216 177.797 36.216ZM239.635 44H229.387L220.259 27.368L216.339 32.016V44H207.491V4.8H216.339V19.752H216.675L228.491 4.8H239.411L226.363 20.2L239.635 44Z"
                fill="#4193B9"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_2741_4110"
                x="0.751953"
                y="0.0720215"
                width="242.883"
                height="48.656"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
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
                <feMerge result="effect1_texture_2741_4110">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </SwiperSlide>
        <SwiperSlide className="w-[364px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="346"
            height="49"
            viewBox="0 0 346 49"
            fill="none"
          >
            <g filter="url(#filter0_g_2741_4111)">
              <path
                d="M20.0052 44.728C10.5412 44.728 4.10116 37.952 4.10116 29.216C4.10116 20.48 10.4852 13.704 20.0612 13.704C29.5252 13.704 35.9652 20.48 35.9652 29.216C35.9652 37.952 29.5252 44.728 20.0052 44.728ZM20.0052 36.888C24.1492 36.888 27.1732 33.696 27.1732 29.216C27.1732 24.736 24.1492 21.544 20.0052 21.544C15.9172 21.544 12.8932 24.736 12.8932 29.216C12.8932 33.752 15.9172 36.888 20.0052 36.888ZM44.4562 44V14.432H52.6322V18.912H53.0802C54.0882 16.728 56.7202 14.208 60.6962 14.208H63.5522V22.384H60.1362C55.8802 22.384 53.1362 25.464 53.1362 30.56V44H44.4562ZM108.53 44.728C96.2658 44.728 87.8658 35.992 87.8658 24.4C87.8658 12.864 96.3218 4.072 108.53 4.072C118.834 4.072 126.058 10.344 127.962 18.464H118.162C116.874 15.104 113.402 12.584 108.53 12.584C101.586 12.584 97.0498 17.68 97.0498 24.4C97.0498 31.288 101.586 36.44 108.53 36.44C114.074 36.44 118.106 33.472 118.834 29.888H108.138V22.608H128.69C129.194 36.384 120.906 44.728 108.53 44.728ZM156.779 44.728C144.739 44.728 135.947 35.992 135.947 24.4C135.947 12.864 144.795 4.072 156.779 4.072C168.763 4.072 177.611 12.976 177.611 24.4C177.611 35.88 168.707 44.728 156.779 44.728ZM156.779 36.216C163.555 36.216 168.371 31.176 168.371 24.4C168.371 17.736 163.555 12.584 156.779 12.584C149.947 12.584 145.131 17.736 145.131 24.4C145.131 31.176 149.947 36.216 156.779 36.216ZM205.681 44.728C193.641 44.728 184.849 35.992 184.849 24.4C184.849 12.864 193.697 4.072 205.681 4.072C217.665 4.072 226.513 12.976 226.513 24.4C226.513 35.88 217.609 44.728 205.681 44.728ZM205.681 36.216C212.457 36.216 217.273 31.176 217.273 24.4C217.273 17.736 212.457 12.584 205.681 12.584C198.849 12.584 194.033 17.736 194.033 24.4C194.033 31.176 198.849 36.216 205.681 36.216ZM254.414 44.728C242.15 44.728 233.75 35.992 233.75 24.4C233.75 12.864 242.206 4.072 254.414 4.072C264.718 4.072 271.942 10.344 273.846 18.464H264.046C262.758 15.104 259.286 12.584 254.414 12.584C247.47 12.584 242.934 17.68 242.934 24.4C242.934 31.288 247.47 36.44 254.414 36.44C259.958 36.44 263.99 33.472 264.718 29.888H254.022V22.608H274.574C275.078 36.384 266.79 44.728 254.414 44.728ZM283.455 44V4.8H292.303V36.104H307.647V44H283.455ZM316.334 44V4.8H341.142V12.36H325.182V20.48H338.79V28.04H325.182V36.384H341.758V44H316.334Z"
                fill="#4193B9"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_2741_4111"
                x="0.101562"
                y="0.0720215"
                width="345.656"
                height="48.656"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
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
                <feMerge result="effect1_texture_2741_4111">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </SwiperSlide>
        <SwiperSlide className="w-[364px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="346"
            height="49"
            viewBox="0 0 346 49"
            fill="none"
          >
            <g filter="url(#filter0_g_2832_3028)">
              <path
                d="M20.0052 44.728C10.5412 44.728 4.10116 37.952 4.10116 29.216C4.10116 20.48 10.4852 13.704 20.0612 13.704C29.5252 13.704 35.9652 20.48 35.9652 29.216C35.9652 37.952 29.5252 44.728 20.0052 44.728ZM20.0052 36.888C24.1492 36.888 27.1732 33.696 27.1732 29.216C27.1732 24.736 24.1492 21.544 20.0052 21.544C15.9172 21.544 12.8932 24.736 12.8932 29.216C12.8932 33.752 15.9172 36.888 20.0052 36.888ZM44.4562 44V14.432H52.6322V18.912H53.0802C54.0882 16.728 56.7202 14.208 60.6962 14.208H63.5522V22.384H60.1362C55.8802 22.384 53.1362 25.464 53.1362 30.56V44H44.4562ZM108.53 44.728C96.2658 44.728 87.8658 35.992 87.8658 24.4C87.8658 12.864 96.3218 4.072 108.53 4.072C118.834 4.072 126.058 10.344 127.962 18.464H118.162C116.874 15.104 113.402 12.584 108.53 12.584C101.586 12.584 97.0498 17.68 97.0498 24.4C97.0498 31.288 101.586 36.44 108.53 36.44C114.074 36.44 118.106 33.472 118.834 29.888H108.138V22.608H128.69C129.194 36.384 120.906 44.728 108.53 44.728ZM156.779 44.728C144.739 44.728 135.947 35.992 135.947 24.4C135.947 12.864 144.795 4.072 156.779 4.072C168.763 4.072 177.611 12.976 177.611 24.4C177.611 35.88 168.707 44.728 156.779 44.728ZM156.779 36.216C163.555 36.216 168.371 31.176 168.371 24.4C168.371 17.736 163.555 12.584 156.779 12.584C149.947 12.584 145.131 17.736 145.131 24.4C145.131 31.176 149.947 36.216 156.779 36.216ZM205.681 44.728C193.641 44.728 184.849 35.992 184.849 24.4C184.849 12.864 193.697 4.072 205.681 4.072C217.665 4.072 226.513 12.976 226.513 24.4C226.513 35.88 217.609 44.728 205.681 44.728ZM205.681 36.216C212.457 36.216 217.273 31.176 217.273 24.4C217.273 17.736 212.457 12.584 205.681 12.584C198.849 12.584 194.033 17.736 194.033 24.4C194.033 31.176 198.849 36.216 205.681 36.216ZM254.414 44.728C242.15 44.728 233.75 35.992 233.75 24.4C233.75 12.864 242.206 4.072 254.414 4.072C264.718 4.072 271.942 10.344 273.846 18.464H264.046C262.758 15.104 259.286 12.584 254.414 12.584C247.47 12.584 242.934 17.68 242.934 24.4C242.934 31.288 247.47 36.44 254.414 36.44C259.958 36.44 263.99 33.472 264.718 29.888H254.022V22.608H274.574C275.078 36.384 266.79 44.728 254.414 44.728ZM283.455 44V4.8H292.303V36.104H307.647V44H283.455ZM316.334 44V4.8H341.142V12.36H325.182V20.48H338.79V28.04H325.182V36.384H341.758V44H316.334Z"
                fill="#4193B9"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_2832_3028"
                x="0.101562"
                y="0.0720215"
                width="345.656"
                height="48.656"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <feMerge result="effect1_texture_2832_3028">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IconsSlider;
