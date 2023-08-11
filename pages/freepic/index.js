import Image from "next/image";
import freepicOne from "../../public/freepic01.jpg";
import freepicTwo from "../../public/freepic02.jpg";
import freepicThree from "../../public/freepic03.jpg";
import TextCard from "@/components/freepic/TextCard";
import imgCard from "@/components/freepic/imgCard";

const FreePic = () => {
  const Article = 
    {
      id: 1,
      title: "Why do we use it?",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      delay:1
    }



  return (
    <div className="mx-w-[1534px] h-screen flex flex-col md:flex-row justify-between items-center bg-slate-900">
      <div className="w-[30%] h-full">
        <TextCard  id={Article.id} title={Article.title} body={Article.body} delay={0.2} />
        <TextCard  id={Article.id} title={Article.title} body={Article.body} delay={0.4} />

      </div>

      <div className="w-[50%] h-full ">
      <imgCard>
       <Image  src={freepicOne} alt="image one " className="w-full h-full  "/>
      </imgCard>
      </div>
    </div>
  );
};

export default FreePic;
