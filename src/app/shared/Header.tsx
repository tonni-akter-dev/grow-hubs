"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import ProductsMegamenu from "./ProductsMegamenu";
import logo from '../../../public/logo.png';
import LoginButtons from "../components/LoginButtons";
import NavLink from "../home/components/NavLink";
import ResourceMegaMenu from "./ResourceMegaMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative z-50 ">
      <nav className="container relative pt-5  ">
        <div className="flex items-center justify-between  lg:py-0 py-5 lg:px-0 px-6 header">
          <div className="lg:hidden mt-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
          <div className=" block  text-[28px] font-bold text-white ">
            <Link href="/" className="flex  gap-2 items-center">
              <Image src={logo} alt="" /> <span>GrowHubs</span>
            </Link>
          </div>
          <div className="flex lg:hidden gap-3 ">
            <div className="relative">
              {/* <Image src={cart} alt="" /> */}
              <p className="bg-[#F52366] rounded-full absolute top-[-2px] right-[-7px] flex justify-center items-center text-white text-[10px] font-bold size-[16px]">
                10
              </p>
            </div>
            {/* <Image src={user} alt="" /> */}
          </div>

          {/*  */}
          <ul className=" gap-7 items-center lg:flex hidden ">
            <li className="hoverable py-6 ">
              <Link
                href="/products"
                className=" flex items-center text-neutral-2 hover:border-b border-neutral-2 transition-all duration-75 ease-in-out relative text-sm lg:text-base font-medium"
              >
                Products <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.96118 9.729L11.8138 13.6111L16.6665 9.729" stroke="#FDFDFD" stroke-width="1.74695" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
              <ProductsMegamenu />
            </li>
            <NavLink>Torvot</NavLink>
            <li className="hoverable py-6 ">
              <Link
                href="/products"
                className=" flex items-center text-neutral-2 hover:border-b border-neutral-2 transition-all duration-75 ease-in-out relative text-sm lg:text-base font-medium"
              >
                Resources <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.96118 9.729L11.8138 13.6111L16.6665 9.729" stroke="#FDFDFD" strokeWidth="1.74695" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <ResourceMegaMenu />
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="flex gap-3 items-center">
            <LoginButtons>Login</LoginButtons>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M0.83252 1.02393L0.832519 15.0239" stroke="#EDEDED" stroke-width="1.00199" stroke-linecap="round" />
              </svg>
            </div>
            <LoginButtons>Start for Free</LoginButtons>
          </div>
        </div>
        {/* {menuOpen && <MobileHeader />} */}
      </nav>
    </div>
  );
};

export default Header;
