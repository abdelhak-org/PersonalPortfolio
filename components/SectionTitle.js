import { dancingScript } from "@/utils/fonts";
import {GiOlive} from "react-icons/gi"


const SectionTitle = () => {
  return (
    <div className="w-full relative top-4 flex flex-center items-center mx-auto">
      <GiOlive className="text-8xl text-green-950 my-2 absolute" /> Skills
    <h3
      style={{
        fontFamily: dancingScript.style.fontFamily
      }}
      className=" w-fit bg-slate-900 px-4 absolute  text-center  py-2 mx-auto my-4 font-semibold text-2xl tracking-widest underline underline-offset-4"
    >
    </h3>

    </div>
  );
};

export default SectionTitle;
