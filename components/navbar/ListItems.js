import React from "react";
import LinkItem from "./LinkItem";
import Link from "next/link";
const ListItems = ({setShow}) => {
  return (
    <ul className="w-full h-fit  px-4  md:w-fit ">
      <LinkItem>
        <Link href="/">home</Link>
      </LinkItem>
      {["about", "skills", "works", "contact"].map((item, index) => {
        return (
          <Link
          key={index}
          href={item}>
          <LinkItem
            y="-200px"
            x="-200px"
            opacity="0"
            animatedY="0"
            animatedX={0}
            animatedOpacity="1"
            duration="1"
            delay={`0.${index}`}
          >
           {item}
          </LinkItem>
          </Link>
        );
      })}
    </ul>
  );
};

export default ListItems;
