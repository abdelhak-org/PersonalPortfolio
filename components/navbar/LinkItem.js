'use client'
import { motion } from "framer-motion";
import { oswald } from "@/utils/fonts";
const LinkItem = ({title }) => {
  
  return (
    <motion.li
      initial={
        {
          opacity:0,
          scale:1
        }
      }
      animate={{
        opacity:1,
        scale:[1,1.2,1],
        transition:{
          duration:0.5,
          delay:0.5
        }
      }}
     
      style={{ fontFamily: oswald.style.fontFamily }}
      className="block   md:inline-block sm:w-full md:w-fit md:px-2 md:py-2 text-center font-bold tracking-wider
      mx-1 hover:bg-[#03C988]
      rounded-lg dark:text-[#03C988] text-slate-900 text-sm underline-offset-0 my-4 dark:hover:bg-slate-500
       cursor-pointer capitalize "
    >
      {title}
    </motion.li>
  );
};

export default LinkItem;
