"use client";
import { useState } from "react";
import { dancingScript, oswald } from "@/utils/fonts";
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
      className="w-screen md:max-w-[1534px] h-screen bg-slate-900 flex justify-between  
    items-center flex-col md:flex-row mx-auto my-4 "
    >
      <div className="w-screen   md:w-[50%]  bg-slate-900 h-full overflow-hidden">
        <Image
          src={contactImg}
          alt="contactImg "
          className=" h-full object-cover "
        />
      </div>
      <div className="w-screen  md:w-[50%] bg-slate-900 text-white h-full py-16">
        <h1 className="text-center text-xl font-press-start ">Contact Us </h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action=""
        >
          <div className="w-full h-fit px-8  my-8">
            <label
              htmlFor="fullname"
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              FullName
            </label>
            <input 
              autoComplete="true"
              id="fullname"
              onChange={(e) => setUser({...user , name :e.target.value})}
              value={user.name}
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="py-2 px-2 w-full border text-gray-800 tracking-wide border-blue-300 rounded-md outline-0"
              type="text"
              name="fullName "
              placeholder="Enter your Name "
            />
          </div>

          <div className="w-full h-fit px-8  my-8">
            <label
              htmlFor="email"
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              Email
            </label>
            <input
              autoComplete="true"
              id="email"
              onChange={(e) => setUser({...user , email:e.target.value})}
              value={user.email}
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="py-2 px-2 w-full border  text-gray-800 tracking-wide border-blue-300 rounded-md outline-none"
              type="email"
              name="Email "
              placeholder="Enter your E-mail "
            />
          </div>

          <div className="w-full h-fit px-8  my-8">
            <label
              htmlFor="message"
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              Message
            </label>
            <textarea
              id="message"
              onChange={(e) => setUser({...user , message:e.target.value})}
              value={user.message}
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="py-2 px-2 w-full  border overflow-scroll text-gray-800 tracking-wide  border-blue-300 rounded-md outline-none "
              type="text"
              name="Message"
              placeholder="Write a Message  "
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
          {failled && <p className="text-red-500 my-2 text-center"> An error occurred while sending the email</p>}
          {succeed && <p className="text-green-500 my-2 text-center">Email sent successfully </p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
