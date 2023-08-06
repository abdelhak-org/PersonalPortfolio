"use client";

import { motion } from "framer-motion";

const Card = ({
  children,
  keyId,
  y,
  x,
  opacity,
  animatedY,
  animatedX,
  animatedOpacity,
  duration,
  delay,
  
 
}) => {
  const variants = {
    hidden: {
      y: `${y}`,
      x: `${x}`,
      opacity: `${opacity}`,
    },
    show: {
      y: `${animatedY}`,
      x: `${animatedX}`,
      opacity: `${animatedOpacity}`,
      scale:[1,1.5,1]
    },
  };

  return (
    <motion.div
      variants={variants}
      whileInView={{
        y: `${animatedY}`,
        x: `${animatedX}`,
        opacity: `${animatedOpacity}`,
      }}
            
     initial={"hidden"}
     transition={{
       type: "spring",
       duration: `${duration}`,
       delay: `${delay}`,
     }}
    
      className="w-full md:w-[280px] min-h-[360px] shadow-md p-4 mx-4 rounded-md cursor-pointer relative text-white 
      bg-slate-900
      " 
    >
      {children}
    </motion.div>
  );
};

export default Card;
