"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative mb-28 w-full max-w-6xl scroll-mt-28 px-4 sm:mb-40 sm:px-6 lg:px-8"
    >
      <SectionHeading>My Projects</SectionHeading>

      <div className="-mt-6 mb-10 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          Selected full-stack products with responsive interfaces,
          authentication, payments, dashboards, and modern API architecture.
        </p>
        <div className="mx-auto mt-5 flex w-fit items-center gap-3 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-800 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-500" />
          {projectsData.length} featured builds
        </div>
      </div>

      <div className="grid w-full gap-6 lg:grid-cols-2 lg:gap-8">
        {projectsData.map((project, index) => (
          <Project key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
