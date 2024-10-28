import React from "react";
import LinkItem from "./LinkItem";
import { dancingScript } from "@/utils/fonts";
const Logo = ({title}) => {
  return (
    <div className=" w-fit h-auto text-white  ">
      <LinkItem
      title={title}
        y="-0px"
        x="-200px"
        opacity="0.2"
        animatedY="0"
        animatedX={0}
        animatedOpacity="1"
        duration="1"
        delay={`1.${1}`}
      />
    
    
    </div>
  );
};

export default Logo;
