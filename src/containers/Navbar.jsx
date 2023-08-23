import React, { useState } from 'react';
import { logo, menu, close }  from '../assets';


const Navbar = () => {
  // const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div>
        <nav className={`flex flex-1 justify-between items-center`}>
            <div className='flex justify-start max-w-60px'>
                <img className='w-[60px] logo_w' src={logo} alt='logo' />
            </div>
                <ul className='flex-1 sm:flex hidden justify-end items-center list-none '>
                    <li className='mr-5 cursor-pointer text-[18px] text-[#fff] font-medium' id='home'>Home</li>
                    <li className='mr-5 cursor-pointer text-[18px] text-[#848482] font-medium' id='skills'>Skills</li>
                    <li className='mr-5 cursor-pointer text-[18px] text-[#848482] font-medium' id='projects'>Projects</li>
                    <li className='cursor-pointer text-[18px] text-[#848482] font-medium' id='contact'>Contact</li>
                </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)} />

                <div
                  className={`${
                    !toggle ? "hidden" : "flex"
                  } p-6 bg-[#960018] absolute top-[100px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
                >
                  <ul className="list-none flex justify-end items-start flex-1 flex-col">
                      <li className={`font-mont mb-2 font-medium cursor-pointer text-[16px] text-white`} id='home'>Home</li>
                      <li className={`font-mont mb-2 font-medium cursor-pointer text-[16px] text-white`} id='skills'>Skills</li>
                      <li className={`font-mont mb-2 font-medium cursor-pointer text-[16px] text-white`} id='projects'>Projects</li>
                      <li className={`font-mont mb-2 font-medium cursor-pointer text-[16px] text-white`} id='contact'>Contact</li>
                  </ul>
                </div>
              </div>
        </nav>
    </div>
  )
}

export default Navbar;