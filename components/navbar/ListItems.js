import React from "react";
import LinkItem from "./LinkItem";
import Link from "next/link";
import { navLinks } from "@/db/db";
const ListItems = ({setShow}) => {
  return (
    <ul className="w-full h-fit  px-4  md:w-fit ">
        <Link
          href={'/'}>
          <LinkItem title='home' />
        
          </Link>
     { navLinks.map((item, index) => {
        return (
          <Link
          key={index}
          href={item}>
          <LinkItem title={item} key={index}/>
        
          </Link>
        );
      })}
    </ul>
  );
};

export default ListItems;
