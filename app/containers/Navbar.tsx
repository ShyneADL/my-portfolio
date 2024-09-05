import React, { useState } from "react";
import Link from 'next/link'

const Navbar = () => {
  // const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative z-50">
      <nav className={`flex flex-1 justify-between items-center`}>
        <div className="flex justify-start max-w-60px">
          <img
            className="md:w-[60px] w-[45px]"
            src="/assets/logo.png"
            alt="logo"
          />
        </div>
        <ul className="flex-1 sm:flex hidden justify-end items-center list-none ">
          <li className="mr-5 cursor-pointer text-[18px] text-[#fff] font-medium">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-5 cursor-pointer text-[18px] text-[#848482] font-medium">
            <Link href="/projects">Projects</Link>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#960018] absolute top-[100px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              <li
                className={`font-mont mb-2 font-medium cursor-pointer text-[16px] text-white`}
              >
                <Link href="/">Home</Link>
              </li>
              
              <li
                className={`font-mont mb-2 font-medium cursor-pointer text-[16px] text-white`}
              >
                <Link href="/projects">Projects</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
