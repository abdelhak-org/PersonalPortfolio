import React from "react";
import LinkItem from "./LinkItem";
import Link from "next/link";
import { dancingScript } from "@/utils/fonts";
const Logo = () => {
  return (
    <div className=" w-fit h-auto text-white  ">
      <LinkItem
        y="-0px"
        x="-200px"
        opacity="0.2"
        animatedY="0"
        animatedX={0}
        animatedOpacity="1"
        duration="1"
        delay={`1.${1}`}
      >
        <Link
          href="/"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: dancingScript.style.fontFamily,
          }}
        >
          AbdelTech .{" "}
        </Link>{" "}
      </LinkItem>
    </div>
  );
};

export default Logo;
