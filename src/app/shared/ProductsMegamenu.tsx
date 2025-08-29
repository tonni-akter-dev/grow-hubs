import React from "react";
import m1 from "/public/home/m1.png";
import m2 from "/public/home/m2.png";
import m3 from "/public/home/m3.svg";
import m4 from "/public/home/m4.svg";
import m5 from "/public/home/m5.svg";
import m6 from "/public/home/m6.svg";
import m7 from "/public/home/m7.svg";
import m11 from "/public/home/m11.png";
import m12 from "/public/home/m12.png";
import m13 from "/public/home/m13.svg";
import m14 from "/public/home/m14.svg";
import m21 from "/public/home/m21.svg";
import m22 from "/public/home/m22.svg";
import m23 from "/public/home/m23.svg";
import m24 from "/public/home/m24.svg";
import Image from "next/image";

const products1 = [
  {
    title: "Courses",
    description: "Share and profit from your expertise by creating and publishing courses.",
    icon: m1,
    bgEffect: "hover:bg-[#E8F2FF]",
    textEffect: "group-hover:text-[#E8F2FF]"
  },
  {
    title: "Community",
    description: "Create a community to share value, and turn members into loyal customers.",
    icon: m2,
    bgEffect: "hover:bg-[#F7EBFD]",
    textEffect: "group-hover:text-[#F7EBFD]"
  },
  {
    title: "Coaching & Consulting",
    description: "Monetise Your Expertise by Creating a consultancy profile page to share it online.",
    icon: m3,
    bgEffect: "hover:bg-[#FBE6E6]",
    textEffect: "group-hover:text-[#FBE6E6]"
  },
  {
    title: "Merchandise",
    description: "Expand Your Revenue Streams. Sell retail products to complement your services.",
    icon: m4,
    bgEffect: "hover:bg-[#F7EBFD]",
    textEffect: "group-hover:text-[#F7EBFD]"
  },
  {
    title: "Podcasts",
    description: "Create, publish, and monetize podcasts effortlessly from your dashboard on all",
    icon: m5,
    bgEffect: "hover:bg-[#fff8eb]",
    textEffect: "group-hover:text-[#fff8eb]"
  },
  {
    title: "Events",
    description: "Gather your audience in one place for more growth and success.",
    icon: m6,
    bgEffect: "hover:bg-[#fff0ea]",
    textEffect: "group-hover:text-[#fff0ea]"
  },
  {
    title: "Brokerage",
    description: "Connect creators, clients, and products in the platform, and earn a commission",
    icon: m7,
    bgEffect: "hover:bg-[#e8f8f6]",
    textEffect: "group-hover:text-[#e8f8f6]"
  }
];
const products2 = [
  {
    title: "Co-sales",
    description: "Share and profit from your expertise by creating and publishing courses.",
    icon: m11,
    bgEffect: "hover:bg-[#f2e6fe]",
    textEffect: "group-hover:text-[#f2e6fe]"
  },
  {
    title: "Email Marketing",
    description: "Draft, send and manage marketing emails with ease.",
    icon: m12,
    bgEffect: "hover:bg-[#e8f2ff]",
    textEffect: "group-hover:text-[#e8f2ff]"
  },
  {
    title: "Funnels & Automations",
    description: "Create sales funnels and automate processes to boost your income easy.",
    icon: m13,
    bgEffect: "hover:bg-[#f2e6fe]",
    textEffect: "group-hover:text-[#f2e6fe]"
  },
  {
    title: "Third party integrations",
    description: "Integrate to many available tools to solidify your online business.",
    icon: m14,
    bgEffect: "hover:bg-[#fff8eb]",
    textEffect: "group-hover:text-[#fff8eb]"
  }
];
const products3 = [
  {
    title: "Embed anywhere",
    description: "Add Growhubs content to your website with one embed code",
    icon: m21,
    bgEffect: "hover:bg-[#fbe6e6]",
    textEffect: "group-hover:text-[#fbe6e6]"
  },
  {
    title: "Analytics & Performance",
    description: "Leverage the right metrics with reports designed for practical insights.",
    icon: m22,
    bgEffect: "hover:bg-[#e8f2ff]",
    textEffect: "group-hover:text-[#e8f2ff]"
  },
  {
    title: "Contacts CRM",
    description: "Bring your contacts and audience to turn them in one of your biggest assets ",
    icon: m23,
    bgEffect: "hover:bg-[#fff8eb]",
    textEffect: "group-hover:text-[#fff8eb]"
  },
  {
    title: "Time management",
    description: "Leverage our unique calendar features for bringing time efficiency in your business.",
    icon: m24,
    bgEffect: "hover:bg-[#e8f8f6]",
    textEffect: "group-hover:text-[#e8f8f6]"
  }
];
const ProductsMegamenu = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="rounded-[30px] p-11 flex flex-col justify-center  mega-menu max-w-[1186px] mx-auto w-full bg-white "
        style={{
          boxShadow: "0 7062px 250px 0 rgba(0, 0, 0, 0.00), 0 4520px 250px 0 rgba(0, 0, 0, 0.01), 0 2542px 250px 0 rgba(0, 0, 0, 0.05), 0 1130px 250px 0 rgba(0, 0, 0, 0.09), 0 282px 250px 0 rgba(0, 0, 0, 0.10)",
        }}
      >
        <div className="w-full  grid lg:grid-cols-3 grid-cols-1  gap-x-6">
          <div className="text-neutral-10 text-base font-medium">
            CREATE & LAUNCH
          </div>
          <div className="text-neutral-10 text-base font-medium">
            SCALE
          </div>
          <div className="text-neutral-10 text-base font-medium">
            MANAGE
          </div>
        </div>
        <div className="">
          <ul className="w-full  grid lg:grid-cols-3 grid-cols-1  gap-x-6">
            <div>
              {products1.map((product, i) => (
                <div
                  key={i}
                  className={`cursor-pointer group flex items-start gap-[18px] p-4 rounded-lg transition-all ease-in-out duration-100 ${product.bgEffect}`}
                >
                  <Image className="size-[45px]" src={product.icon} alt="" />
                  <div className="group-hover-transition">
                    <h3
                      className={`font-bold text-neutral-10 text-base mb-1.5 transition-colors duration-200 ${product.textEffect}`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className={`text-sm text-neutral-8 font-medium transition-colors duration-200 ${product.textEffect}`}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {products2.map((product, i) => (
                <div 
                  key={i} 
                  className={`cursor-pointer group flex items-start gap-[18px] p-4 rounded-lg transition-all ease-in-out duration-100 ${product.bgEffect}`}
                >
                  <Image className="size-[45px]" src={product.icon} alt="" />
                  <div className="group-hover-transition">
                    <h3
                      className={`font-bold text-neutral-10 text-base mb-1.5 transition-colors duration-200 ${product.textEffect}`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className={`text-sm text-neutral-8 font-medium transition-colors duration-200 ${product.textEffect}`}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {products3.map((product, i) => (
                <div 
                  key={i} 
                  className={`cursor-pointer group flex items-start gap-[18px] p-4 rounded-lg transition-all ease-in-out duration-100 ${product.bgEffect}`}
                >
                  <Image className="size-[45px]" src={product.icon} alt="" />
                  <div className="group-hover-transition">
                    <h3
                      className={`font-bold text-neutral-10 text-base mb-1.5 transition-colors duration-200 ${product.textEffect}`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className={`text-sm text-neutral-8 font-medium transition-colors duration-200 ${product.textEffect}`}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsMegamenu;