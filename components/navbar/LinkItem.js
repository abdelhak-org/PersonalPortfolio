import { motion } from "framer-motion";
import { oswald } from "@/utils/fonts";
const LinkItem = ({title }) => {
  
  return (
    <motion.li
      
      style={{ fontFamily: oswald.style.fontFamily }}
      className="block   md:inline-block sm:w-full md:w-fit md:px-2 md:py-2 text-center 
      mx-1 hover:bg-[#03C988]
      rounded-lg dark:text-[#03C988] text-slate-900 text-sm underline-offset-0 my-4 dark:hover:bg-slate-500
      font-light cursor-pointer capitalize "
    >
      {title}
    </motion.li>
  );
};

export default LinkItem;
