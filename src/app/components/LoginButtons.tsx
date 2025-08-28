import React from "react";

type IProps = {
  children: React.ReactNode;
};

const LoginButtons = ({ children }: IProps) => {
  return (
    <button className="hover:bg-white hover:text-black transition-all ease-in-out duration-300 text-neutral-50 text-body font-medium leading-6 py-3 px-5 border border-[#EDEDED80] rounded-[100px]">
      {children}
    </button>
  );
};

export default LoginButtons;
