import React from "react";
import LinkItem from "./LinkItem";
import ThemeToggleButton from "../ThemeToggleButton";
import Link from "next/link";
import { socialLinks } from "@/db/db";
const SocialLinks = () => {
  return (
    <ul className="w-fit md:w-fit px-4 flex items-center ">
      {socialLinks.map((item, index) => {
        return (
          <Link key={index} target="_blank" href={item.link}>
            <LinkItem title={item.icon} />
          </Link>
        );
      })}
      <ThemeToggleButton />
    </ul>
  );
};

export default SocialLinks;
