import { dancingScript, oswald } from "@/utils/fonts";
import Image from "next/image";
import contactImg from "../../public/ConactImg.jpg";
const Contact = () => {
  return (
    <div className="max-w-[1534px] h-screen bg-slate-900 flex justify-between 
    items-center flex-col md:flex-row mx-auto ">
      <div className="w-screen  md:w-[50%]  bg-slate-100 h-full overflow-hidden">
        <Image
          src={contactImg}
          alt="contactImg "
          className=" h-full object-cover "
        />
      </div>
      <div className="w-screen  md:w-[50%] bg-slate-100 h-full py-8">
        <h1 className="text-center text-xl font-press-start ">Contact Us </h1>
        <form>
          <div className="w-full h-fit px-8  my-8">
            <label
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              FullName
            </label>
            <input
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="py-2 px-2 w-full border  border-blue-300 rounded-md outline-0"
              type="text"
              name="fullName "
              placeholder="Enter your Name "
            />
          </div>
          <div className="w-full h-fit px-8  my-8">
            <label
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              Email
            </label>
            <input
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="py-2 px-2 w-full border  border-blue-300 rounded-md outline-none"
              type="email"
              name="Email "
              placeholder="Enter your E-mail "
            />
          </div>
          <div className="w-full h-fit px-8  my-8">
            <label
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              Password
            </label>
            <input
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="py-2 px-2 w-full border  border-blue-300 rounded-md outline-none"
              type="email"
              name="password "
              placeholder="Enter  your Password "
            />
          </div>
          <button
            style={{
              fontFamily: oswald.style.fontFamily,
            }}
            className="px-4 py-1  border border-blue-300 
           rounded-md tracking-wide mx-auto block bg-slate-900 text-white font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
