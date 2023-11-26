"use client";
import { useState } from "react";
import { dancingScript, oswald , roboto} from "@/utils/fonts";
import Image from "next/image";
import contactImg from "../../public/ConactImg.jpg";
//import TextInput from "@/components/contact/TextInput";
const Contact = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const [succeed , setSucceed] = useState(null);
  const [failled , setFailled] = useState(null)
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (response.status === 200) {
        //  alert('Email sent successfully!');
          setSucceed('Email sent successfully!')
          setUser({name:"" , email:"" ,message:""});
          setTimeout(()=>{
            setSucceed(null);
          },2000)
        } else {
         // alert('An error occurred while sending the email.');
          setFailled(true);
          setTimeout(()=>{
            setFailled(null);
          },2000)

        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while sending the email.');
      }
    };

  return (
    <section
      className="w-screen md:max-w-[1534px] h-screen dark:bg-slate-900 bg-gray-200    flex justify-between  
    items-center flex-col md:flex-row mx-auto  "
    >
      <div className="w-screen   md:w-[50%]  h-full overflow-hidden  ">
        <Image
          src={contactImg}
          alt="contactImg "
          className=" h-full object-cover "
        />
      </div>
      <div className="w-screen  md:w-[50%] dark:bg-slate-900 bg-gray-100  tracking-wider h-full flex justify-center items-center flex-col">
        <h1 className="text-center text-2xl my-4 dark:bg-slate-800 bg-slate-800 text-white  w-[616px]  p-4 rounded-md ">Contact Us </h1>
        <form
          className="border p-2 rounded-md dark:border-slate-500 border-slate-300 my-2 bg-gray-200 dark:bg-slate-800"
          onSubmit={handleSubmit}
          method="POST"
          action=""
        >
          <div className="w-[600px] h-16 px-4  rounded-md  my-8 border border-gray-600 flex justify-between items-center">
            <label
              htmlFor="fullname"
              style={{
                fontFamily: roboto.style.fontFamily,
              }}
              className="text-xl  font-light dark:text-white text-slate-900 "
            >
              Name : 
            </label>
            <input 
              autoComplete="true"
              id="fullname"
              onChange={(e) => setUser({...user , name :e.target.value})}
              value={user.name}
              style={{
                fontFamily: roboto.style.fontFamily,
              }}
              className="w-[400px] py-2 px-2  bg-gray-200  text-gray-800 border border-gray-600   shadow-md tracking-wider rounded-md outline-0"
              type="text"
              name="fullName "
              placeholder="Enter your Name "
            />
          </div>

          <div  className="w-[600px] h-16 px-4  rounded-md  my-8 border border-gray-600 flex justify-between items-center">
            <label
              htmlFor="email"
              style={{
                fontFamily: roboto.style.fontFamily,
              }}
              className="text-xl  font-light dark:text-white  text-slate-900"            >
              Email :
            </label>
            <input
              autoComplete="true"
              id="email"
              onChange={(e) => setUser({...user , email:e.target.value})}
              value={user.email}
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="w-[400px] py-2 px-2  bg-gray-200  text-gray-800 border border-gray-600   shadow-md tracking-wider rounded-md outline-0"              type="email"
              name="Email "
              placeholder="Enter your E-mail "
            />
          </div>

          <div  className="w-[600px] h-60 px-4 py-8  rounded-md border border-gray-600 flex flex-row justify-between items-center">
            <label
              htmlFor="message"
              style={{
                fontFamily: roboto.style.fontFamily,
              }}
              className=" text-center text-xl my-8 dark:text-white text-slate-900 "
            >
              Message :
            </label>
            <textarea
              id="message"
              onChange={(e) => setUser({...user , message:e.target.value})}
              value={user.message}
              style={{
                fontFamily: roboto.style.fontFamily,
              }}
              className="w-[400px] h-full p-4  bg-gray-200  text-gray-800 border border-gray-600   shadow-md tracking-wider rounded-md outline-0"
              type="text"
              name="Message"
              placeholder="Write a Message  "
            />
          </div>

          <button
          style={{
            fontFamily: roboto.style.fontFamily,
          }}
            className="px-8 py-2 my-8 border border-gray-600 
           rounded-md tracking-wide mx-auto block bg-slate-900 text-white font-bold"
            type="submit"
          >
            Submit
          </button>
          {failled && <p className="text-red-500 my-2 text-center"> An error occurred while sending the email</p>}
          {succeed && <p className="text-green-500 my-2 text-center">Email sent successfully </p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
