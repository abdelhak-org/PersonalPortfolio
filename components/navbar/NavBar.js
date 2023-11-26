"use client";
import { useState } from "react";
import ListItems from "./ListItems";
import SocialLinks from "./SocialLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";
const NavBar = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        data-testid="container"
        onClick={() => setShow(!show)}
        className=" md:hidden my-2 mx-auto text-center text-3xl p-4
        dark:text-slate-100 dark:bg-slate-900 bg-slate-100 text-slate-900
         cursor-pointer fixed top-4 right-4 z-50 "
      >
        {
        !show ? <AiOutlineMenu /> : <AiOutlineClose />
        }
      </div>

      {show && (
        <div
          onClick={() => {
            if (window.innerWidth <= "767") {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
          className={` w-screen md:max-w-[1535px]   fixed z-40  md:relative   md:w-screen md:h-[55px] my-0 py-24 md:py-0  mx-auto flex overflow-hidden
      flex-col items-center justify-center border border-white   border-b-gray-100  dark:border-slate-800  md:flex-row md:justify-between dark:bg-slate-900 bg-white
        `}
        >
          <Logo />
          <ListItems />
          <SocialLinks />
        </div>
      )}
    </>
  );
};

export default NavBar;
