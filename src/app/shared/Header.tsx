// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { HiOutlineMenu, HiX } from "react-icons/hi";
// import { usePathname } from "next/navigation";
// import ProductsMegamenu from "./ProductsMegamenu";
// import logo from '../../../public/logo.png';
// import LoginButtons from "../components/LoginButtons";
// import NavLink from "../home/components/NavLink";
// import ResourceMegaMenu from "./ResourceMegaMenu";
// import topShadow from '../../../public/home/banner-top-shadow.png';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <div className="relative z-50 ">

//       <div className="absolute left-[14%] "> 
//         <Image src={topShadow} alt="" />
//       </div>
//       <nav className="container relative pt-5  ">
//         <div className="flex items-center justify-between  lg:py-0 py-5 lg:px-0 px-6 header">
//           <div className="lg:hidden mt-2">
//             <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
//               {menuOpen ? <HiX /> : <HiOutlineMenu />}
//             </button>
//           </div>
//           <div className=" block  text-[28px] font-bold text-white ">
//             <Link href="/" className="flex  gap-2 items-center">
//               <Image src={logo} alt="" /> <span>GrowHubs</span>
//             </Link>
//           </div>


//           {/*  */}
//           <ul className=" gap-7 items-center lg:flex hidden ">
//             <li className="hoverable py-6 ">
//               <Link
//                 href="/products"
//                 className=" flex items-center text-neutral-2 hover:border-b border-neutral-2 transition-all duration-75 ease-in-out relative text-sm lg:text-base font-medium"
//               >
//                 Products <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M6.96118 9.729L11.8138 13.6111L16.6665 9.729" stroke="#FDFDFD" stroke-width="1.74695" stroke-linecap="round" stroke-linejoin="round" />
//                 </svg>
//               </Link>
//               <ProductsMegamenu />
//             </li>
//             <NavLink>Torvot</NavLink>
//             <li className="hoverable py-6 ">
//               <Link
//                 href="/products"
//                 className=" flex items-center text-neutral-2 hover:border-b border-neutral-2 transition-all duration-75 ease-in-out relative text-sm lg:text-base font-medium"
//               >
//                 Resources <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M6.96118 9.729L11.8138 13.6111L16.6665 9.729" stroke="#FDFDFD" strokeWidth="1.74695" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </Link>
//               <ResourceMegaMenu />
//             </li>
//           </ul>

//           {/* BUTTONS */}
//           <div className="flex gap-3 items-center">
//             <LoginButtons>Login</LoginButtons>
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
//                 <path d="M0.83252 1.02393L0.832519 15.0239" stroke="#EDEDED" stroke-width="1.00199" stroke-linecap="round" />
//               </svg>
//             </div>
//             <LoginButtons>Start for Free</LoginButtons>
//           </div>
//         </div>
//         {/* {menuOpen && <MobileHeader />} */}
//       </nav>
//     </div>
//   );
// };

// export default Header;



"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import ProductsMegamenu from "./ProductsMegamenu";
import logo from "../../../public/logo.png";
import LoginButtons from "../components/LoginButtons";
import NavLink from "../home/components/NavLink";
import ResourceMegaMenu from "./ResourceMegaMenu";
import topShadow from "../../../public/home/banner-top-shadow.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50 w-full">
      <div className="lg:block hidden absolute left-[14%] top-0">
        <Image src={topShadow} alt="" />
      </div>
      <nav className="container relative lg:pt-5 ">
        <div className="flex items-center justify-between lg:py-0 py-3 header">
          <div className="text-body-lg lg:text-[28px] font-bold text-white">
            <Link href="/" className="flex gap-2 items-center">
              <Image src={logo} alt="logo" className="w-8 h-8 lg:w-10 lg:h-10" />
              <span>GrowHubs</span>
            </Link>
          </div>
          <div className="lg:hidden flex gap-3 items-center ">
            <LoginButtons>Login</LoginButtons>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="16"
                viewBox="0 0 2 16"
                fill="none"
              >
                <path
                  d="M0.83252 1.02393L0.832519 15.0239"
                  stroke="#EDEDED"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-white  border border-[#EDEDED80] rounded-[100px] h-[45px] w-[52px] flex justify-center  items-center"
            >
              {menuOpen ? <HiX className="text-[20px]" /> : <HiOutlineMenu className="text-[20px]" />}
            </button>
          </div>
          {/* Desktop Nav */}
          <ul className="gap-7 items-center lg:flex hidden">
            <li className="hoverable py-6">
              <Link
                href="/products"
                className="flex items-center text-neutral-2 hover:border-b border-neutral-2 transition-all duration-75 ease-in-out relative text-sm lg:text-base font-medium"
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M6.96118 9.729L11.8138 13.6111L16.6665 9.729"
                    stroke="#FDFDFD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <ProductsMegamenu />
            </li>

            <NavLink>Torvot</NavLink>

            <li className="hoverable py-6">
              <Link
                href="/resources"
                className="flex items-center text-neutral-2 hover:border-b border-neutral-2 transition-all duration-75 ease-in-out relative text-sm lg:text-base font-medium"
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M6.96118 9.729L11.8138 13.6111L16.6665 9.729"
                    stroke="#FDFDFD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <ResourceMegaMenu />
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            <LoginButtons>Login</LoginButtons>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="16"
                viewBox="0 0 2 16"
                fill="none"
              >
                <path
                  d="M0.83252 1.02393L0.832519 15.0239"
                  stroke="#EDEDED"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <LoginButtons>Start for Free</LoginButtons>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-5 text-gray-800 z-40">
            <Link href="/products" className="text-sm font-medium">
              Products
            </Link>
            <Link href="/torvot" className="text-sm font-medium">
              Torvot
            </Link>
            <Link href="/resources" className="text-sm font-medium">
              Resources
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <LoginButtons>Login</LoginButtons>
              <LoginButtons>Start for Free</LoginButtons>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
