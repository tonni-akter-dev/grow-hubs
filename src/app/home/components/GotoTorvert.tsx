"use client";
import CircularImages from "./CircularImages";
import topShadow from "../../../../public/home/banner-top-shadow.png";
import Image from "next/image";

const GotoTorvert = () => {
  return (
    <div className="bg-[#041527] pb-[145px] w-full min-h-screen flex flex-col items-center justify-center p-4 pt-[60px] relative">
      <Image
        className="absolute top-0 left-1/2 -translate-x-1/2"
        src={topShadow}
        alt=""
      />
      <div className="text-center flex flex-col justify-center items-center">
        <button className="text-neutral-50 text-body font-semibold py-3 px-3.5 bg-[#62697199] rounded-[100px]">
          TORVET
        </button>
        <h1 className="text-[36px] lg:text-display font-bold  leading-[40px] lg:leading-[57px] banner_heading my-5 ">
          Where content connects <br /> and converts.
        </h1>
        <p className="text-white text-h6 leading-[30px]">
          Explore posts, discover offers, and engage with creators <br />
          all in one central space..
        </p>
        <button
          className="text-[#7A6464] text-body font-bold  py-3 px-6 flex gap-2 items-center bg-[linear-gradient(267deg,#F7E6CD_9.84%,#E3F1FA_58.55%,#C0DBF9_107.26%)] rounded-[100px] mt-5"
          style={{ textShadow: " 0 1px 4px rgba(255, 255, 255, 0.25)" }}
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
          >
            <g clip-path="url(#clip0_2741_1302)">
              <path
                d="M8.61489 1.49243L13.3601 6.23763M13.3601 6.23763L8.61489 10.9838M13.3601 6.23763L1.49609 6.23863"
                stroke="#7A6464"
                strokeWidth="2.00304"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2741_1302">
                <rect
                  width="14.0213"
                  height="12.0182"
                  fill="white"
                  transform="translate(0.490234 0.490906)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <CircularImages />
    </div>
  );
};

export default GotoTorvert;
