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
      <h3 className="w-fit text-4xl  px-8 py-4 mx-auto  my-8  font-bold tracking-widest ">
        Works{" "}
      </h3>

      <section
        className="w-screen md:max-w-[1534px] py-48 border-none    bg-slate-100 dark:bg-slate-800 g
      mx-auto  flex flex-col  md:flex-row  justify-around  items-center px-auto gap-4 "
      >
        <ProjectBox>
          <Image
            src={demoOne}
            alt="imageSrc"
            className="h-full overflow-hidden"
          />
        </ProjectBox>

        <ProjectBox left={0}>
          <Image
            src={demoTwo}
            alt="imageSrc"
            className="h-full overflow-hidden"
          />
        </ProjectBox>
        <ProjectBox left={-500}>
          <Image
            src={demoThree}
            alt="imageSrc"
            className="h-full overflow-hidden  "
          />
        </ProjectBox>
      </section>
    </>
  );
};
export default Works;
