import React from "react";
import LinkItem from "./LinkItem";
import Link from "next/link";
import { dancingScript } from "@/utils/fonts";
const Logo = () => {
  return (
    <div className=" w-fit h-auto text-white  ">
        <Link
          href="/"
       
        >
          <LinkItem title =" AbdelTech ."  />
         
        </Link>
    </div>
  );
};

export default Logo;
