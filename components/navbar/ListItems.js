import React from "react";
import LinkItem from "./LinkItem";
import Link from "next/link";

const titles = ["about", "skills", "works", "contact"];
const ListItems = () => {
  return (
    <ul className="w-full h-fit  px-4  md:w-fit ">
      <Link href="/">
      
      <LinkItem 
      title="Home"
      />
      </Link>
        

      {titles.map((item, index) => {
        
        return (
          <Link
          href={item}
          >
          
          
          <LinkItem
            title={item}
            key={index}
            y="-200px"
            x="-200px"
            opacity="0"
            animatedY="0"
            animatedX={0}
            animatedOpacity="1"
            duration="1"
            delay={`0.${index}`}
            />
            </Link>
        );
      })}
    </ul>
  );
};

export default ListItems;
