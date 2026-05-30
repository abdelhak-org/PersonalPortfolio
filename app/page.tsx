import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SectionSeparator />
        <About />
        <SectionSeparator />
        <Skills />
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
