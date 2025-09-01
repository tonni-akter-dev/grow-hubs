"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import ProductsMegamenu from "./ProductsMegamenu";
import LoginButtons from "../components/LoginButtons";
import NavLink from "../home/components/NavLink";
import ResourceMegaMenu from "./ResourceMegaMenu";
import topShadow from "../../../public/home/banner-top-shadow.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      <div className="absolute left-0 lg:left-[14%] top-0 z-10">
        <Image src={topShadow} alt="" />
      </div>
      <nav className="container relative lg:pt-5   z-50">
        <div className="flex items-center justify-between lg:py-0 py-3 header">
          <div className="text-body-lg lg:text-[28px] font-bold text-white">
            <Link href="/" className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="39" viewBox="0 0 34 39" fill="none">
                <rect x="11.2407" y="17.5493" width="2.09138" height="20.8912" rx="1.04569" fill="white" stroke="white" strokeWidth="0.9" />
                <rect x="19.5922" y="17.5493" width="2.09138" height="20.8912" rx="1.04569" fill="white" stroke="white" strokeWidth="0.9" />
                <rect x="15.4292" y="11.6789" width="2.09138" height="26.771" rx="1.04569" fill="white" stroke="white" strokeWidth="0.9" />
                <rect x="14.2611" y="4.07603" width="4.79891" height="5.10958" rx="2.39946" fill="white" stroke="white" strokeWidth="0.7" />
                <path d="M31.0614 7.02246C32.365 9.51777 32.999 12.3572 32.8943 15.2136C32.7896 18.0699 31.9496 20.8324 30.4668 23.1833C29.1861 25.2139 27.4701 26.8675 25.4688 28.0036C24.7142 28.432 23.8592 27.8456 23.8573 27.0408C23.8564 26.5993 24.1133 26.2126 24.4876 26.0202C26.2815 25.0979 27.4558 23.8021 28.653 21.904C29.9126 19.907 30.6311 17.5527 30.7205 15.1124C30.81 12.672 30.2663 10.2487 29.156 8.1236C28.1009 6.10393 26.8246 4.38759 25.0807 3.24097C24.7038 2.9931 24.5057 2.52135 24.6423 2.06491C24.8309 1.43515 25.5789 1.12138 26.1571 1.50688C28.1916 2.86321 29.8802 4.76142 31.0614 7.02246Z" fill="white" stroke="white" strokeWidth="0.9" />
                <path d="M2.9386 22.0723C1.635 19.577 1.00099 16.7375 1.10566 13.8812C1.21036 11.0248 2.05039 8.26235 3.53316 5.91141C4.81387 3.88087 6.52985 2.22723 8.53123 1.0911C9.28583 0.662725 10.1408 1.24914 10.1427 2.05389C10.1436 2.49542 9.88672 2.88217 9.51244 3.07457C7.71851 3.99683 6.5442 5.29261 5.34699 7.19071C4.08741 9.18775 3.36894 11.542 3.27947 13.9823C3.19005 16.4227 3.73375 18.846 4.84396 20.9711C5.89915 22.9908 7.17543 24.7071 8.91927 25.8538C9.29621 26.1016 9.49431 26.5734 9.3577 27.0298C9.16906 27.6596 8.42111 27.9733 7.84285 27.5878C5.80841 26.2315 4.11984 24.3333 2.9386 22.0723Z" fill="white" stroke="white" strokeWidth="0.9" />
              </svg>
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
            <li className="group hoverable py-4">
              <Link
                href="/products"
                className="group flex items-center text-neutral-2 border border-transparent hover:border-white px-3 py-2 rounded-[100px] transition-all duration-300 ease-in-out relative text-sm lg:text-base font-medium"
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-180 "
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
            <li className=" group hoverable py-4">
              <div className="">
                <Link
                  href="/products"
                  className="group flex items-center text-neutral-2 border border-transparent hover:border-white px-3 py-2 rounded-[100px] transition-all duration-300 ease-in-out relative text-sm lg:text-base font-medium group"
                >
                  Resources
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="svg_rotate ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-180">
                    <path
                      d="M6.96118 9.729L11.8138 13.6111L16.6665 9.729"
                      stroke="#FDFDFD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <ResourceMegaMenu />
            </li>
            <NavLink>Blog</NavLink>
            <NavLink>Pricing</NavLink>
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
          <ul className="lg:hidden absolute top-full left-0 w-full bg-[#020E1B] p-6 flex flex-col text-white z-40">
            <li className="hoverable py-4">
              <Link
                href="/products"
                className="flex items-center text-neutral-2  border border-transparent hover:border-white px-3 py-2 rounded-[100px] transition-all duration-300 ease-in-out relative text-sm lg:text-base font-medium"
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
            <li className="hoverable py-4">
              <Link
                href="/resources"
                className="flex items-center text-neutral-2  border border-transparent hover:border-white px-3 py-2 rounded-[100px] transition-all duration-300 ease-in-out relative text-sm lg:text-base font-medium"
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
            <NavLink>Blog</NavLink>
            <NavLink>Pricing</NavLink>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <LoginButtons>Login</LoginButtons>
              <LoginButtons>Start for Free</LoginButtons>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
