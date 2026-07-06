import About from "@/components/about";
import Contact from "@/components/contact";
import Course from "@/components/course";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-0 pb-20 pt-2">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Course />
      <Experience />
      <Contact />
    </main>
  );
}
