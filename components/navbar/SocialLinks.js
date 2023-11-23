import React from "react";
import LinkItem from "./LinkItem";
import ThemeToggleButton from "../ThemeToggleButton";
import { socialLinks } from "@/db/db";
const SocialLinks = () => {
  return (
    <ul className="w-fit md:w-fit px-4 flex items-center ">

      {socialLinks.map((item, index) => {
        return (
          <LinkItem
            key={index}
            title={item}
         />
          
        );
      })}
      <ThemeToggleButton/>
    </ul>
  );
};

export default SocialLinks;
