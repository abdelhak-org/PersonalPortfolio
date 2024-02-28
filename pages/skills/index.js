import Image from "next/image";
import nextImg from "../../public/nextjs.webp";
import tailwindImg from "../../public/tailwindcss.jpg";
import reactImg from "../../public/React-icon.svg.png";
import Card from "@/components/skills/Card";
import { oswald } from "@/utils/fonts";
import SectionTitle from "@/components/SectionTitle";
SectionTitle;

const Skills = () => {
  return (
    <>
      <h3 className="w-fit text-4xl  px-8 py-4 mx-auto  my-8  
      font-extrabold tracking-widest underline underline-offset-2 ">Skills </h3>
      <section
        className=" w-screen p-8 md:max-w-[1534px]  dark:text-slate-200 dark:bg-slate-800 border
       bg-white text-slate-900 
         py-24 flex-col md:flex-row flex mx-auto gap-8  justify-center items-center  "
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
      </section>
      <section
        className=" max-w-[1534px] bg-[#333]  h-fit  py-8 my-4 flex-col md:flex-row flex mx-auto 
      justify-center items-center  overflow-hidden"
      >
        <h3 className="p-8 mx-2 my-2 text-2xl font-extrabold text-white rounded-full border shadow-lg tracking-widest uppercase shadow-cyan-300 ">
          Html
        </h3>
        <h3 className="p-8 mx-2 my-2 text-2xl font-extrabold text-white rounded-full border shadow-lg tracking-widest uppercase shadow-cyan-300 ">
          JavaScript{" "}
        </h3>
        <h3 className="p-8 mx-2 my-2 text-2xl font-extrabold text-white rounded-full border shadow-lg tracking-widest uppercase shadow-cyan-300 ">
          Css{" "}
        </h3>
      </section>
    </>
  );
};

export default Skills;
