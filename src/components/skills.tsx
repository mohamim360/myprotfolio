/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skillsBadges = [
  {
    name: "JavaScript",
    badge:
      "https://img.shields.io/badge/-Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F",
  },
  {
    name: "TypeScript",
    badge:
      "https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc",
  },
  {
    name: "React",
    badge:
      "https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB",
  },
  {
    name: "Next.js",
    badge:
      "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  },
  {
    name: "Node.js",
    badge:
      "https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A",
  },
  {
    name: "Express.js",
    badge:
      "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
  },
  {
    name: "MongoDB",
    badge:
      "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  },
  {
    name: "Tailwind CSS",
    badge:
      "https://img.shields.io/badge/Tailwind%20CSS-092749?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&labelColor=000000",
  },
  {
    name: "VS Code",
    badge:
      "https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white",
  },
  {
    name: "Git",
    badge:
      "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {skillsBadges.map((skill, index) => (
          <motion.a
            key={index}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={fadeInAnimationVariants}
            className="inline-block"
          >
            <img
              src={skill.badge}
              alt={`${skill.name} Badge`}
              className="h-10"
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
