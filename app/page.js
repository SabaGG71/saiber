"use client";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import ProjectItem from "./_components/ProjectItem";
import Faq from "./_components/Faq";
import Contact from "./_components/Contact";
import { SparklesPreview } from "./_components/SparklesPreview";
import { MeteorsDemo } from "./_components/MeteorsDemo";
import { InfiniteMovingCardsDemo } from "./_components/InfiniteMovingCardsDemo";
import SkillsTop from "./_components/SkillsTop";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <>
      <SparklesPreview />
      <MeteorsDemo />
      <Hero />
      <InfiniteMovingCardsDemo />
      <About />
      <Projects />
      <ProjectItem />
      <SkillsTop />
      <Skills />
      <Faq />
      <Contact />
    </>
  );
}
