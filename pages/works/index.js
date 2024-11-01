"use client";
import ProjectBox from "@/components/works/ProjectBox";
import Image from "next/image";
import  homeImg from "@/public/homepage.png"
import babyImg from "@/public/babyblog.png"
import mobileImg from "@/public/mobileapp.png"
const Works = () => {
  return (
    <>
      
      <section
        className="w-screen md:max-w-[1534px] min-h-screen   bg-white gap-4
      mx-auto border flex flex-col    justify-between  items-center px-auto  "
      >
        <ProjectBox >
          <Image
            src={homeImg}
            alt="imageSrc"
            className="w-full overflow-hidden"
          />
        </ProjectBox>

        <ProjectBox left={0}>
          <Image
            src={babyImg}
            alt="imageSrc"
            className="w-full overflow-hidden"
          />
        </ProjectBox>
        <ProjectBox left={-500}>
          <Image
            src={mobileImg}
            alt="imageSrc"
            className="w-full overflow-hidden"
          />
        </ProjectBox>
      </section>
    </>
  );
};
export default Works;
