"use client";
import ProjectBox from "@/components/works/ProjectBox";
import Image from "next/image";
import demoOne from "../../public/demoOne.jpg";
import demoTwo from "../../public/demoTwo.webp";
import demoThree from "../../public/demoThree.gif";
import SectionTitle from "@/components/SectionTitle";
const Works = () => {
  return (
    <>
      
      <div
        className="w-screen md:max-w-[1534px] min-h-screen  bg-slate-100 text-white relative my-0
      mx-auto border flex flex-col  md:flex-row  justify-between  items-center   "
      >
        <ProjectBox left={500}>
          <Image
            src={demoOne}
            alt="imageSrc"
            className="w-full overflow-hidden"
          />
        </ProjectBox>

        <ProjectBox left={0}>
          <Image
            src={demoTwo}
            alt="imageSrc"
            className="w-full overflow-hidden"
          />
        </ProjectBox>
        <ProjectBox left={-500}>
          <Image
            src={demoThree}
            alt="imageSrc"
            className="w-full overflow-hidden"
          />
        </ProjectBox>
      </div>
    </>
  );
};
export default Works;