"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  contestsData,
  educationData,
  languagesData,
} from "@/lib/data";
import { BsMortarboard, BsTranslate, BsTrophy } from "react-icons/bs";

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="section-container mb-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300 sm:text-lg">
        I&apos;m a web developer with a Bachelor of Computer Science from the{" "}
        <span className="font-medium text-gray-800 dark:text-gray-100">
          {educationData.institution}
        </span>
        . I specialize in building scalable, maintainable full-stack applications
        with React, Next.js, and Node.js. I enjoy turning complex problems into
        intuitive, high-quality user experiences and I&apos;m always eager to
        learn new technologies.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <motion.div
          className="glass-card glass-card-hover p-6 text-left"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-300">
            <BsMortarboard className="text-xl" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Education
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {educationData.degree}
          </p>
          <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
            {educationData.institution}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            {educationData.period}
          </p>
        </motion.div>

        <motion.div
          className="glass-card glass-card-hover p-6 text-left"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-300">
            <BsTranslate className="text-xl" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Languages
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {languagesData.map((lang) => (
              <span key={lang} className="skill-pill">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass-card glass-card-hover p-6 text-left sm:col-span-1"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="mb-4 inline-flex rounded-xl bg-pink-500/10 p-3 text-pink-600 dark:text-pink-300">
            <BsTrophy className="text-xl" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Contests
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {contestsData.map((contest) => (
              <li key={contest} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-500" />
                {contest}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
