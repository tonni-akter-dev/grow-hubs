import React from "react";
import Marquee from "react-fast-marquee";

const BannerMarquee = () => {
  return (
    <div className="bg-[#FFF3D8] py-4 lg:py-6 px-4 text-secondary-900 font-medium">
      <Marquee speed={25} autoFill={true}>
        <span className="mr-[20px]">
          Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
          convert clients inside the platform so you can sell from day one
          without paying for ads.
        </span>
      </Marquee>
    </div>
  );
};

export default BannerMarquee;
