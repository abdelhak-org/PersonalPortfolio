"use client";
import { useState } from "react";
import { dancingScript, oswald } from "@/utils/fonts";
import Image from "next/image";
import contactImg from "../../public/ConactImg.jpg";
import TextInput from "@/components/contact/TextInput";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setState();
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
          onSubmit={submitHandle}
          method="POST"
          action="mailto:abdelhak.org@gmail.com"
        >
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
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
