"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaMedium } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { personalInfo } from "@/lib/personal-info";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-20 w-full scroll-mt-28 overflow-hidden pt-24 sm:mb-28 sm:pt-32 lg:mb-32"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-80 bg-hero-glow" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:text-left">
        <motion.div
          className="relative order-1 w-full max-w-sm justify-self-center lg:order-2 lg:max-w-md lg:justify-self-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative mx-auto flex aspect-[4/5] w-full max-w-[18rem] items-center justify-center sm:max-w-[21rem] lg:max-w-[23rem]">
            <motion.div
              className="absolute inset-3 bg-gradient-to-br from-cyan-500/30 via-slate-900/10 to-emerald-400/30 blur-2xl"
              style={{
                borderRadius: "44% 56% 50% 50% / 44% 46% 54% 56%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute inset-0 border border-cyan-700/20 dark:border-cyan-300/20"
              style={{
                borderRadius: "45% 55% 52% 48% / 42% 44% 56% 58%",
              }}
              animate={{
                borderRadius: [
                  "45% 55% 52% 48% / 42% 44% 56% 58%",
                  "54% 46% 44% 56% / 52% 42% 58% 48%",
                  "45% 55% 52% 48% / 42% 44% 56% 58%",
                ],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative w-[92%] bg-gradient-to-br from-slate-950 via-cyan-700 to-emerald-500 p-[3px] shadow-card transition duration-500 group-hover:shadow-card-hover"
              style={{
                borderRadius: "44% 56% 50% 50% / 44% 46% 54% 56%",
              }}
              animate={{
                y: [0, -8, 0],
                borderRadius: [
                  "44% 56% 50% 50% / 44% 46% 54% 56%",
                  "52% 48% 46% 54% / 50% 44% 56% 50%",
                  "44% 56% 50% 50% / 44% 46% 54% 56%",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="relative overflow-hidden bg-white/90 p-2 dark:bg-slate-950/90"
                style={{
                  borderRadius: "43% 57% 49% 51% / 43% 45% 55% 57%",
                }}
              >
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Web Developer`}
                  width={420}
                  height={520}
                  quality={95}
                  priority
                  className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                  style={{
                    borderRadius: "41% 59% 48% 52% / 42% 44% 56% 58%",
                  }}
                />
                <div className="pointer-events-none absolute inset-2 bg-gradient-to-tr from-slate-950/10 via-transparent to-cyan-300/20 mix-blend-multiply dark:from-cyan-950/20 dark:to-emerald-300/10" />
              </div>
            </motion.div>

            <motion.span
              className="absolute right-4 top-10 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.9)]"
              animate={{ y: [0, 16, 0], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute bottom-12 left-4 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.85)]"
              animate={{ y: [0, -14, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="order-2 w-full max-w-2xl text-center lg:order-1 lg:text-left"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="mb-4 inline-flex rounded-full border border-emerald-200/80 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 shadow-soft backdrop-blur-xl dark:border-emerald-400/20 dark:bg-white/10 dark:text-emerald-200 sm:text-sm"
            variants={fadeUp}
            custom={0}
          >
            Available for work
          </motion.p>

          <motion.h1
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
            variants={fadeUp}
            custom={1}
          >
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-cyan-200 dark:to-emerald-200">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2
            className="mt-5 text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl lg:text-2xl"
            variants={fadeUp}
            custom={2}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base lg:mx-0 lg:text-lg lg:leading-8"
            variants={fadeUp}
            custom={3}
          >
            {personalInfo.tagline} Passionate about clean code, modern UI, and
            delivering polished digital experiences.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
            variants={fadeUp}
            custom={4}
          >
            <Link
              href="#contact"
              className="btn-primary group w-full sm:w-auto"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
              <BsArrowRight className="opacity-80 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              className="btn-secondary group w-full sm:w-auto"
              href={personalInfo.resumePath}
              download
            >
              Download Resume
              <HiDownload className="opacity-70 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                className="btn-icon"
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <BsLinkedin className="text-lg" />
              </a>
              <a
                className="btn-icon text-xl"
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithubSquare />
              </a>
              <a
                className="btn-icon"
                href={personalInfo.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium profile"
              >
                <FaMedium className="text-lg" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
