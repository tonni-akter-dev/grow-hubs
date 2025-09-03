'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useRef } from 'react';

interface IconsSliderProps {
  onComplete?: () => void;
}

const NotThemSlider: React.FC<IconsSliderProps> = ({ onComplete }) => {
  const swiperRef = useRef(null);
  const slideCount = 1; // currently only 1 slide
  const autoplayDelay = 2000;
  const completedRef = useRef(false);

  useEffect(() => {
    const totalTime = slideCount * autoplayDelay;

    const timer = setTimeout(() => {
      if (!completedRef.current && onComplete) {
        completedRef.current = true;
        onComplete();
      }
    }, totalTime + 500); // Add a small buffer

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="creators h-16 overflow-hidden">
      <Swiper
        ref={swiperRef}
        direction={'vertical'}
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
          if (swiper.activeIndex === slideCount - 1 && !completedRef.current && onComplete) {
            completedRef.current = true;
            onComplete();
          }
        }}
      >
        {/* ✅ You can add more slides here later */}
        <SwiperSlide className="w-[364px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="290"
            height="47"
            viewBox="0 0 290 47"
            fill="none"
          >
            <g filter="url(#filter0_g_2741_4135)">
              <path
                d="M4.48604 42V5.6H13.586L27.522 28.48H27.834V5.6H35.79V42H26.638L12.754 19.12H12.442V42H4.48604ZM63.4142 42.676C52.2342 42.676 44.0702 34.564 44.0702 23.8C44.0702 13.088 52.2862 4.924 63.4142 4.924C74.5422 4.924 82.7582 13.192 82.7582 23.8C82.7582 34.46 74.4902 42.676 63.4142 42.676ZM63.4142 34.772C69.7062 34.772 74.1782 30.092 74.1782 23.8C74.1782 17.612 69.7062 12.828 63.4142 12.828C57.0702 12.828 52.5982 17.612 52.5982 23.8C52.5982 30.092 57.0702 34.772 63.4142 34.772ZM97.9272 42V12.724H87.7872V5.6H116.387V12.724H106.195V42H97.9272ZM147.916 42V12.724H137.776V5.6H166.376V12.724H156.184V42H147.916ZM173.943 42V5.6H182.159V19.692H196.667V5.6H204.935V42H196.667V27.596H182.159V42H173.943ZM214.68 42V5.6H237.716V12.62H222.896V20.16H235.532V27.18H222.896V34.928H238.288V42H214.68ZM246.479 42V5.6H256.619L266.447 30.3H266.759L275.391 5.6H285.583V42H277.627V21.408H277.315L269.723 42H263.119L254.695 20.576H254.383V42H246.479Z"
                fill="#4179B9"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_2741_4135"
                x="0.486328"
                y="0.924072"
                width="289.098"
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
                <feMerge result="effect1_texture_2741_4135">
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

export default NotThemSlider;
