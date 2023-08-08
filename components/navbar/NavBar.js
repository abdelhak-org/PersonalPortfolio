"use client"
import { useEffect, useState } from "react";
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
        className=" md:hidden my-2 mx-auto text-center text-2xl p-4 text-white cursor-pointer fixed top-4 right-4 z-30 "
        >

      {!show ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

 { show &&  <div
      className={`${
        show ? "" : ""
      } w-screen md:max-w-[1535px] h-[100vh]   md:w-screen md:h-[55px] my-0 py-24 md:py-0  mx-auto flex overflow-hidden
      flex-col items-center justify-center border-none  md:flex-row md:justify-between 
      bg-gray-900    `}
      >
      <Logo />
      <ListItems />
      <SocialLinks />
    </div>}
      </>
  );
};

export default NavBar;
