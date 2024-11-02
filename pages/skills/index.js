import Image from "next/image";
import nextImg from "../../public/nextjs.webp";
import tailwindImg  from "../../public/tailwindcss.jpg";
import reactImg from "../../public/React-icon.svg.png";
import Card from "@/components/skills/Card";
import {  oswald } from "@/utils/fonts";
import SectionTitle from "@/components/SectionTitle";
SectionTitle

const Skills = () => {
  return (
      
      
        
        <>
        <section 
          className="w-screen md:max-w-[1534px] min-h-screen md:flex-rows
          bg-white gap-4 md:px-8
          mx-auto border flex flex-col  justify-between py-8
          items-center px-auto  "
        
        >
       
          <h2
          className="w-fit mx-auto font-bolder
           text-4xl font-serif mb-8 underline underline-offset-4  "
          >
          Skills  
          
           </h2>
        
       <div
       className="w-full py-12 flex justify-center items-center gap-4  flex-col md:flex-row "
       >
 
        <Card
          keyId="1"
          y="0px"
          x="-250px"
          opacity={0}
          animatedY="0px"
          animatedX="0px"
          animatedOpacity="1"
          duration="0.8"
          delay="0.4"
        >
          <Image
            src={nextImg}
            alt="NextImg"
            className="mb-8 h-50 rounded-full  "
          />
          <h3
            style={{ fontFamily: oswald.style.fontFamily }}
            className="text-center font-extralight text-2xl "
          >
            Next js
          </h3>
        </Card>
        <Card
          keyId="2"
          y="250px"
          x="0px"
          opacity={0}
          animatedY="0px"
          animatedX="0px"
          animatedOpacity={1}
          duration="0.8"
          delay="0.4"
        >
          <Image
            src={reactImg}
            alt="NextImg"
            className="mb-8 mt-4 h-50 rounded-full "
            />
          <h3
            style={{ fontFamily: oswald.style.fontFamily }}
            className="text-center font-extralight text-2xl "
          >
            Reactjs
          </h3>
        </Card>
        <Card
          keyId="3"
          y="0px"
          x="250px"
          opacity={0}
          animatedY="0px"
          animatedX="0px"
          animatedOpacity={1}
          duration="0.8"
          delay="0.4"
        >
          <Image
            src={tailwindImg}
            alt="NextImg"
            className=" mb-8 h-50 rounded-full "
          />
          <h3
            style={{ fontFamily: oswald.style.fontFamily }}
            className="text-center font-extralight text-2xl   "
            >
            Tailwindcss
          </h3>
        </Card>
            </div>
      </section>
      <section className=" max-w-[1534px] bg-[#333]  h-fit  py-8 my-4 flex-col md:flex-row flex mx-auto 
      justify-center items-center  overflow-hidden">
 
       <h3 className="p-8 mx-2 my-2 text-2xl font-extrabold text-white rounded-full border shadow-lg tracking-widest uppercase shadow-cyan-300 ">Html</h3>
       <h3 className="p-8 mx-2 my-2 text-2xl font-extrabold text-white rounded-full border shadow-lg tracking-widest uppercase shadow-cyan-300 ">JavaScript  </h3>
       <h3 className="p-8 mx-2 my-2 text-2xl font-extrabold text-white rounded-full border shadow-lg tracking-widest uppercase shadow-cyan-300 ">Css </h3>
      </section>

      </>
    
  );
};

export default Skills;
