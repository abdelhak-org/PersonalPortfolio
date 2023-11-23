import { useState, useEffect } from "react";
import About from "./about";
//import FreePic from "./freepic";
import Skills from "./skills";
import Contact from "./contact";
import Works from "./works";

export default function Home() {
  const [isRendered, setIsRendered] = useState(false);

  return (
    <>
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}
