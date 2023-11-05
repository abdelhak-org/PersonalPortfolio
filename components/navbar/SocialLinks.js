import React from "react";
import LinkItem from "./LinkItem";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <ul className="w-fit md:w-fit px-4 flex items-center ">
      {[
        <FaFacebook className=" text-xl  " />,
        <FaTwitter className="text-xl" />,
        <FaGithub className="text-xl" />,
      ].map((item, index) => {

       return(
        <LinkItem
        title={item}
        key={index}
        y="0px"
        x="200px"
        opacity="0.2"
        animatedY="0"
        animatedX="0"
        animatedOpacity="1"
        duration="1"
        delay={`1.${index}`}
     / >
       
       )


      })

        }
    </ul>
  );
};

export default SocialLinks;
