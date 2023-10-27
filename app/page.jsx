"use client";

import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    AOS.refreshHard();
  }, []);

  return (
    <main className='mt-24'>
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;
