import Image from "next/image";
import freepicOne from "../../public/freepic01.jpg";
import freepicTwo from "../../public/freepic02.jpg";
import freepicThree from "../../public/freepic03.jpg";
import { dancingScript, oswald } from "@/utils/fonts";
import Container from "@/layout/Container";

const FreePic = () => {
  return (
    
            
            <div className="mx-w-[1534px] h-screen flex flex-col md:flex-row justify-between items-center bg-slate-900">
            
                
              <div className="w-[30%] h-full bg-yellow-300">
              <h1>left </h1>
              </div>
            
            
              <div className="w-[50%] h-full bg-red-600">
                <h1>right </h1>
              </div>








              </div>

          
  
  );
};

export default FreePic;
