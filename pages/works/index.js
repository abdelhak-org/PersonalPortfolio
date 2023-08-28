"use client";
import ProjectBox from "@/components/works/ProjectBox";
import Image from "next/image";
import demoOne from "../../public/demoOne.jpg";
import demoTwo from "../../public/demoTwo.png";
import demoThree from "../../public/demoThree.gif";
//import SectionTitle from "@/components/SecgtionTitle";
const Works = () => {
  return (
    <>
      
      <section
        className="w-screen md:max-w-[1534px] min-h-screen   bg-slate-100 gap-4
      mx-auto border flex flex-col  md:flex-row  justify-between  items-center px-auto  "
      >
        <ProjectBox >
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
      </section>
    </>
  );
};
export default Works;
