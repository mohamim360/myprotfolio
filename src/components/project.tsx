import { useRef } from "react";
import { projectsData } from "@/lib/data";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number] & {
  githubLink?: string;
  liveLink?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  liveLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 relative"
    >
      <section className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden pt-4 px-4 sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20  ">
        {/* Hover Links */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <motion.div
              className="flex items-center justify-center gap-6 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              {githubLink && (
                <a
                  className="bg-white py-4 px-6 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:dark:text-white"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare className="text-[1.35rem]" />
                  GitHub
                </a>
              )}
              {liveLink && (
                <a
                  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:dark:text-white"
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineExternalLink className="text-[1.35rem]" />
                  Live Demo
                </a>
              )}
            </motion.div>
        </div>

        {/* Project Content */}
        <div className="sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-between h-full sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-700 dark:text-white/70 pt-2">{description}</p>
          <ul className="flex flex-wrap pb-4 pt-2 gap-2 sm:mb-10 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Image */}
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-20 right-4 w-[22rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:right-[initial]
            group-even:left-4
            group-even:translate-x-0"
        />
      </section>
    </motion.div>
  );
}
