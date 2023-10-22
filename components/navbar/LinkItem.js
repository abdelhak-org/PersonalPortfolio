import { motion } from "framer-motion";
import { oswald } from "@/utils/fonts";
const LinkItem = ({
  title,
  y,
  x,
  opacity,
  animatedY,
  animatedX,
  animatedOpacity,
  duration,
  delay,
}) => {
  return (
    <motion.li
      initial={{
        y: y,
        x: x,
        opacity: opacity,
      }}
      animate={{
        y: animatedY,
        x: animatedX,

        opacity: animatedOpacity,
      }}
      transition={{
        type: "spring",
        duration: duration,
        delay: delay,
      }}
      style={{ fontFamily: oswald.style.fontFamily }}
      className="block   md:inline-block sm:w-full md:w-fit md:px-2 md:py-2 text-center 
      mx-1 hover:bg-slate-800
      rounded-lg text-[#03C988] text-sm underline-offset-0 my-4
      font-light cursor-pointer capitalize "
    >
      {title}
    </motion.li>
  );
};

export default LinkItem;
