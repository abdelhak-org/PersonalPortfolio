"use client";
import { useState } from "react";
import ListItems from "./ListItems";
import SocialLinks from "./SocialLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";
  const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <header
    className="w-screen bg-slate-900 border border-transparent border-b-slate-800  "
    >
      <div
        onClick={() => setShow(!show)}
        className="  md:hidden my-2 mx-auto text-center text-3xl p-4 text-white
         bg-slate-900 cursor-pointer fixed top-4 right-4 z-50 "
      >
        {!show ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

   
      {show && <div
       
        className=' w-screen h-fit  md:hidden  fixed z-40  relative my-24 flex
       flex-col items-center justify-center border-none  '
      
        >
          <Logo  title=' AbdelTech.'/>
          <ListItems />
          <SocialLinks />
        </div>}

  
        <div
        className='  w-full max-w-[1536px] hidden md:flex justify-between items-center h-[55px] mx-auto '
      
        >
          <Logo  title=' AbdelTech.'/>
          <ListItems />
          <SocialLinks />
        </div>
        
        
        
    
    </header>
  );
};

export default NavBar;
