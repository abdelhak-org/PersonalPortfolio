"use client";
import personalImage from "../../public/personalPhoto.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { dancingScript, oswald, roboto, inter } from "../../utils/fonts";
import Link from "next/link";
import { useState } from "react";
import AboutMeView from "@/pages/about/AboutMeView";
const About = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  return (
    <section className="w-screen  md:max-w-[1534px]   flex flex-col relative  dark:bg-slate-900 overflow-hidden  md:flex-row  mx-auto   h-screen justify-between items-center ">
      <div className="w-screen  md:w-[50%] h-full   relative  mx-auto md:border md:border-transparent md: border-r-slate-400    text-white  flex flex-col justify-center items-start pl-16">
        <h3 className="font-bold text-md md:text-xl tracking-wide dark:text-white text-slate-900 font-sans">
          Hello , I am
        </h3>

        <motion.h3
          style={{
            fontFamily: roboto.style.fontFamily,
          }}
          className=" font-bold text-2xl  tracking-widest  z-10  text-blue-500  dark:text-[#03C988] "
        >
          Boussafer Abdelhak
        </motion.h3>

        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 3,
            delay: 0.1,
          }}
          className="web text-5xl my-4 md:text-6xl font-extrabold tracking-wider dark:text-white text-slate-950 "
          style={{ fontFamily: inter.style.fontFamily }}
        >
          Web Developer
        </motion.h1>
        <p
          className="my-4 text-xl font-light tracking-wider dark:text-white text-slate-900"
          style={{ fontFamily: roboto.style.fontFamily }}
        >
          Reactjs , Nextjs ,Nodejs , MongoDB
        </p>
        <p
          className=" text-md my-2 font-light tracking-widest  dark:text-white text-slate-600 "
          style={{ fontFamily: roboto.style.fontFamily }}
        >
          sass , git , linux
        </p>
        <button
          className="py-2 px-4 border  bg-blue-500 font-semibold dark:bg-[#03C988]
        hover:text-cyan-400 
        rounded-md my-2 outline-0 hover:bg-slate-800 "
        >
          <Link href="/about/AboutMeView">Read More</Link>
        </button>
      </div>
      <div className="  w-[50%] h-[80vh] dark:bg-slate-800 bg-gray-600 rounded-md text-center relative  mx-auto text-white flex flex-col justify-center items-center">
        <div className="absolute w-20 h-20 rounded-full border-none  top-20 shadow-slate-200 bg-[#0c0c0c00] right-24 shadow-2xl	 "></div>
        <Image
          src={personalImage}
          alt="personalImage"
          className="rounded-[50%]  overflow-hidden shadow-sm z-10   shadow-cyan-400 "
        />
      </div>
      <div className="w-[1534px] h-96 dark:bg-[#1D5B79] bg-gray-500  absolute bottom-0 left-0 clipPath "></div>
    </section>
  );
};
export default About;
