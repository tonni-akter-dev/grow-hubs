import React from "react";
// import next1 from "/public/home/next.png";
// import m1 from "/public/home/m1.png";
// import m2 from "/public/home/m2.png";
// import m3 from "/public/home/m3.png";
// import m4 from "/public/home/m4.png";
// import m5 from "/public/home/m5.png";
// import m6 from "/public/home/m6.png";
// import m7 from "/public/home/m7.png";
// import m8 from "/public/home/m8.png";
// import m9 from "/public/home/m9.png";
// import m10 from "/public/home/m10.png";
// import m11 from "/public/home/m11.png";
// import m12 from "/public/home/m12.png";
import Image from "next/image";

const products = [
  {
    title: "POS Pro - Advanced POS",
    description: "Build your dream multi vendor marketplace",
    // icon: m1,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "Garments ERP",
    description: "Build your dream multi vendor marketplace",
    // icon: m2,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "SMSPro - Bulk SMS Gateway",
    description: "Build your dream multi vendor marketplace",
    // icon: m3,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "SaaS Pharmacy App",
    description: "Build your dream multi vendor marketplace",
    // icon: m4,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "Grocery Selling App",
    description: "Build your dream multi vendor marketplace",
    // icon: m5,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "Acnoo Flutter Dashboard",
    description: "Build your dream multi vendor marketplace",
    // icon: m6,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "HRM Application..",
    description: "Build your dream multi vendor marketplace",
    // icon: m7,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "Rentpro SaaS",
    description: "Build your dream multi vendor marketplace",
    // icon: m8,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "Blog & news PHP Scripts",
    description: "Build your dream multi vendor marketplace",
    // icon: m9,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "Influencer Hiring Marke",
    description: "Build your dream multi vendor marketplace",
    // icon: m10,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "My Bazar Laravel Multivendor Script",
    description: "Build your dream multi vendor marketplace",
    // icon: m11,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "POS SAAS - Flutter POS",
    description: "Build your dream multi vendor marketplace",
    // icon: m12,
    category: "Powerful and Simple Analytics",
  },
];

const ProductsMegamenu = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="mb-12 rounded-2xl pt-5 lg:pt-[61px] pb-10 px-5 lg:px-10 flex justify-center  mega-menu max-w-[1030px] mx-auto w-full bg-white  "
        style={{
          boxShadow: "0px 24px 56px 0px rgba(167, 174, 186, 0.16)",
        }}
      >
        <div className="container mx-auto ">
          <ul className="w-full  grid lg:grid-cols-3 grid-cols-1  gap-x-5">
            {products.map((product, i) => (
              <div key={i} className="cursor-pointer flex items-start pt-6 lg:pt-3 gap-3 pb-6 hover:bg-[#E4C2FF66] px-5 rounded-lg transition-all ease-in-out duration-100">
                <div>
                  <h3 className="font-bold text-[#282F39] text-base mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] font-medium">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        
        </div>
      </div>
    </div>
  );
};

export default ProductsMegamenu;
