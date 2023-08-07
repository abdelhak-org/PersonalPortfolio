import About from "./about";
import FreePic from "./freepic";
import Skills from "./skills";
import Contact from "./contact";
import Works from "./works";
import { dancingScript, oswald } from '../utils/fonts';

export default function Home() {
  return (
    <div className="w-screen mx-auto ">
      <About />
      <Skills/>
      <FreePic/>
      <Works/>
      <Contact/>
    </div>
  );
}
