"use client"
import { useEffect, useState } from "react";
import LinkItem from "./LinkItem";
import ListItems from "./ListItems";
import SocialLinks from "./SocialLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useScroll } from "framer-motion";
import Logo from "./Logo";
const NavBar = () => {
  const [show, setShow] = useState(true);
  const {scrollY} = useScroll()
   useEffect(()=>{
    console.log(scrollY.value)
   },[scrollY])
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className=" md:hidden my-2 mx-auto text-center text-2xl p-4 text-white cursor-pointer fixed top-4 right-4 z-10  "
        >

      {!show ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

 { show &&  <div
      className={`${
        show ? "" : ""
      } max-w-[1535px] h-[100vh]   md:w-screen md:h-[55px] my-0 py-24 md:py-0  mx-auto flex overflow-hidden
      flex-col items-center justify-center border-none  md:flex-row md:justify-between
      bg-gray-900  relative   `}
      >
      <Logo />
      <ListItems />
      <SocialLinks />
    </div>}
      </>
  );
};

export default NavBar;
