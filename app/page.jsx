"use client";

import { useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useSmoothScroll();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;
