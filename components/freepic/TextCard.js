import { dancingScript, oswald } from "@/utils/fonts";
import {motion } from "framer-motion"
const TextCard = ({delay, title , id ,body  }) => {
  return (
    <motion.div 
    key={id}
      initial ={{
        opacity:0
      }}
      whileInView ={{
        opacity:1
      }}
      transition={{
        type:"spring" ,
        duration:2,
        delay:`${delay}`,
      }}
    
    className="p-4 ">
     
      <div className="w-[360px] h-[260px] border-blue-200 border rounded-md relative p-4 bg-slate-100
          before:w-4 before:h-full before:content-[''] before:bg-green-600 before:absolute before:top-0 before:left-0
      ">
       <h3
        style={{
          fontFamily: dancingScript.style.fontFamily
        }}
        className="text-start  text-xl px-4">{title}?
      </h3>
      <p
      style={{
        fontFamily:oswald.style.fontFamily
      }}
      className="text-sm p-4 font-light  overflow-hidden">
       {body}
      </p>
      </div>

    </motion.div>
  );
};

export default TextCard;
