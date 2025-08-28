import Link from 'next/link'
import React from 'react'
type IProps = {
    children: React.ReactNode;
};

const NavLink = ({ children }: IProps) => {
    return (
        <li className="py-6   ">
            <Link
                href="#"
                className="text-neutral-2 transition-all duration-75 ease-in-out  text-base font-medium hover:border-b border-neutral-2 "
            >
                {children}
            </Link>
        </li>
    )
}

export default NavLink
