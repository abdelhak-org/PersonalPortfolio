"use client";
import personalImage from "../../public/personalPhoto.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { dancingScript, oswald } from "../../utils/fonts";
import Link from "next/link";
import { useState } from "react";
import AboutMeView from "@/pages/about/AboutMeView";
const About = () => {
  const [showAboutMe , setShowAboutMe ] = useState(false);
  return (
    <section className="w-screen bg-slate-900 relative pt-12  ">
      <div
      className="w-screen  md:max-w-[1534px] flex flex-col relative  bg-slate-900 overflow-hidden  md:flex-row  mx-auto p-4  min-h-screen justify-between items-center"
      >

      <div className="w-screen  md:w-[50%] md:h-auto  text-center relative pt-8 mx-auto md:border md:border-transparent md: border-r-slate-400    text-white  flex flex-col justify-center items-center">
        <h3 className="font-bold text-md md:text-xl tracking-wide text-[#fff] font-sans ">
          Hello , I am
        </h3>

        <motion.h3
          style={{
            fontFamily: dancingScript.style.fontFamily,
          }}
          className=" font-md text-xl md:font-bold  md:text-2xl tracking-widest  my-4 px-4 z-10   underline-offset-8 underline  text-[#03C988] "
          >
          Boussafer Abdelhak
        </motion.h3>

        <motion.h1
          initial={{
            x: "-50",
            y: "0",
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            rotateX: [0, 90, -270, 90, 0],
          }}
          transition={{
            duration: 3,
            delay: 0.1,
            bounce: 0.4,
          }}
          className="web text-5xl md:text-6xl font-extrabold tracking-wider text-[#1C82AD] font-serif "
          >
          Web Developer{" "}
        </motion.h1>
        <p
          className="my-4 text-xl font-light tracking-wider"
          style={{ fontFamily: oswald.style.fontFamily }}
          >
          Reactjs , Nextjs ,Nodejs , MongoDB
        </p>
        <p
          className=" text-md font-light tracking-widest "
          style={{ fontFamily: oswald.style.fontFamily }}
          >
          sass , git , linux
        </p>
        <button   
         className="py-2 px-4 border border-cyan-400 shadow-sm shadow-cyan-200 
          hover:text-cyan-400 
          rounded-md my-4 outline-0 hover:bg-slate-800 "
          >
          <Link href="/about/AboutMeView">
           Read More
          </Link>
        </button>
      </div>
      <div className="  w-[50%] h-[80vh] bg-slate-900 text-center relative pt-8 mx-auto text-white flex flex-col justify-center items-center">
        <div className="absolute w-20 h-20 rounded-full border-none  top-20 shadow-slate-200 bg-[#0c0c0c00] right-24 shadow-2xl	 "></div>
        <Image
          src={personalImage}
          alt="personalImage"
          className="rounded-[50%] my-8 overflow-hidden shadow-sm z-10   shadow-cyan-400 "
          />
      </div>
      <div className="w-[1533px] h-96 bg-[#1D5B79]  absolute bottom-0 left-0 clipPath "></div>
      </div>
    </section>
  );

        }
export default About;
