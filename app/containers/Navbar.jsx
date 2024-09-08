"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { TransitionLink } from "../components/TransitionLink";
const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleSetActive = (link) => {
      setActive(pathname === link ? link : null);
    };

    if (typeof window !== "undefined") {
      handleSetActive(window.location.pathname);
    }

    const handleRouteChange = (url) => {
      handleSetActive(url);
    };

    window.addEventListener("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("routeChangeStart", handleRouteChange);
    };
  }, [pathname]);

  return (
    <div className="fixed bg-[#2a3439] top-0 left-0 xl:px-[180px] md:px-[60px] md:py-6 px-[16px] w-full z-50">
      <nav className={`flex flex-1 justify-between items-center`}>
        <div className="flex justify-start max-w-60px">
          <Image
            className="md:w-[60px] w-[45px]"
            src="/assets/logo.png"
            alt="logo"
            width={45}
            height={45}
          />
        </div>
        <ul className="flex-1 sm:flex hidden justify-end items-center list-none ">
          <li
            className={`mr-5 cursor-pointer text-[18px] font-medium ${
              active === "/" ? "text-white" : "text-[#848482]"
            }`}
          >
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li
            className={`mr-5 cursor-pointer text-[18px] font-medium ${
              active === "/projects" ? "text-white" : "text-[#848482]"
            }`}
          >
            <TransitionLink href="/projects">Projects</TransitionLink>
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
                <TransitionLink href="/">Home</TransitionLink>
              </li>

              <li
                className={`font-mont mb-2 font-medium cursor-pointer text-[16px] text-white`}
              >
                <TransitionLink href="/projects">Projects</TransitionLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
