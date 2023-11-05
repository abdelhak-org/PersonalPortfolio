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
        onClick={() => setShow(!show)}
        className=" md:hidden my-2 mx-auto text-center text-3xl p-4 text-white
         bg-slate-900 cursor-pointer fixed top-4 right-4 z-50 "
      >
        {!show ? <AiOutlineMenu /> : <AiOutlineClose />}
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
          className={`${
            show ? "" : ""
          } w-screen md:max-w-[1535px] h-[100vh] fixed z-40  md:relative   md:w-screen md:h-[55px] my-0 py-24 md:py-0 bg-slate-900 mx-auto flex overflow-hidden
      flex-col items-center justify-center border-none  md:flex-row md:justify-between 
        `}
        >
          <Logo  title='Abdel'/>
          <ListItems />
          <SocialLinks />
        </div>
      )}
    </>
  );
};

export default NavBar;
