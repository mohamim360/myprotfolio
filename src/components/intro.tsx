"use client";

import React from "react";
import profile from "/public/1737815539158.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const textVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};



export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-36"
    >
      <motion.div
        className="overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        {/* Profile Image with Wave Animation */}
        <div className="flex items-center justify-center mb-8 ">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={profile}
                alt="Meheidi Hasan"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-[5.5rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>

          </div>
        </div>

        {/* Main Intro Text */}
        <motion.h1
          className="px-4 text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl mt-16 mb-10"
          variants={textVariant}
          custom={1}
        >
          Hello, I&apos;m{" "}
          <motion.span
            className="text-blue-600 dark:text-blue-400"
            whileHover={{ scale: 1.1 }}
          >
            Mehedi Hasan
          </motion.span>
        </motion.h1>
        <motion.h2
          className="px-4 text-2xl font-medium leading-relaxed sm:text-3xl text-gray-700 dark:text-gray-300"
          variants={textVariant}
          custom={2}
        >
          A Passionate Web Developer
        </motion.h2>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-18 text-lg font-medium mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/MEHEDI_HASAN_RESUME.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/mohamim360"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mohamim360"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
