"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p>
        Hi, I&apos;m a web developer with a background in Computer Science and Engineering from the Institute of Science and Technology, Bangladesh. I have over a year of experience working with web technologies..
      </p>

    </motion.section>
  );
}
//intro animation change
//download resume
//change age, for 
//card margin,image
//my courses
//experience