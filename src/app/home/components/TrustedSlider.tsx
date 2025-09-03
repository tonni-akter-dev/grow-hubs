"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { testimonials } from "@/app/utils/data";
import TestimonialCard from "./TestimonialCard";

const TrustedSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isOpen) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [isOpen]);

  return (
    <div className="relative testimonial py-[60px] bg-[linear-gradient(180deg,#80A2C0_0%,#3C4C5A_100%)] text-center">
      <button className="mb-4 py-3 px-3.5 rounded-[100px] text-body uppercase font-semibold bg-[linear-gradient(90deg,#DAE9FA_0%,#69A6EC_100%)]">
        Testimonials
      </button>
      <h2 className="lg:text-display text-white font-bold leading-[57px] mb-4">
        Trusted by Creators <br /> & Proven by Results.
      </h2>
      <p className="text-white text-h6 font-medium leading-[30px] mb-10 ">
        See how others grow with Growhubs — real stories, real success.
      </p>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        className="mySwiper relative z-20"
        centeredSlides={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        // modules={[Autoplay]}
        initialSlide={3}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          744: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard setIsOpen={setIsOpen} data={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className="fixed inset-0 !z-50 flex items-center justify-center bg-black/50">
          <div className="w-[439px] h-[697px] aspect-video rounded-2xl overflow-hidden relative">
            <button
              className="absolute top-2 right-3 text-white text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={"https://www.youtube.com/embed/dQw4w9WgXcQ"}
              title="Testimonial Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrustedSlider;
