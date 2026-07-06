"use client";

import { useRef } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number] & {
  githubLink?: string;
  liveLink?: string;
  index?: number;
};

export default function Project({
  index = 0,
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
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const primaryLink = liveLink ?? githubLink;
  const accentClasses = [
    "from-cyan-500 via-sky-400 to-emerald-400",
    "from-indigo-500 via-violet-400 to-cyan-400",
    "from-amber-400 via-orange-400 to-cyan-400",
  ];
  const accent = accentClasses[index % accentClasses.length];

  const openPrimaryLink = () => {
    if (!primaryLink) return;

    window.open(primaryLink, "_blank", "noopener,noreferrer");
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPrimaryLink();
    }
  };

  const stopCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group h-full w-full"
    >
      <article
        className="relative flex h-full min-h-[39rem] cursor-pointer flex-col overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/85 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200/80 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-400/30 lg:h-[45rem]"
        role={primaryLink ? "link" : undefined}
        tabIndex={primaryLink ? 0 : undefined}
        aria-label={`Open ${title}`}
        onClick={primaryLink ? openPrimaryLink : undefined}
        onKeyDown={primaryLink ? handleCardKeyDown : undefined}
      >
        <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

        <div className="p-3 pb-0 sm:p-4 sm:pb-0">
          <div className="overflow-hidden rounded-[1.15rem] border border-slate-900/10 bg-slate-950 shadow-card dark:border-white/10">
            <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-slate-950/95 px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-1 h-2 w-16 rounded-full bg-white/15" />
            </div>
            <div className="relative aspect-[16/10] bg-slate-950">
              <Image
                src={imageUrl}
                alt={`Screenshot of ${title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw, 520px"
                quality={100}
                className="object-contain transition duration-700 group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-cyan-900/10 bg-cyan-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Featured
            </span>
            <span className="text-sm font-black text-slate-300 dark:text-white/20">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="inline-flex items-start gap-2 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
            <span>{title}</span>
            <BsArrowUpRight className="mt-1 flex-shrink-0 text-base text-cyan-500 opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </h3>

          <p className="mt-3 overflow-hidden text-sm leading-6 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] dark:text-white/70">
            {description}
          </p>

          <ul className="mt-4 flex max-h-[4.6rem] flex-wrap gap-2 overflow-hidden">
            {tags.map((tag, tagIndex) => (
              <li
                className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-600 transition-colors group-hover:border-cyan-700/20 group-hover:bg-cyan-950 group-hover:text-cyan-50 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-400/15 dark:group-hover:text-cyan-100"
                key={tagIndex}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {githubLink && (
              <a
                className="btn-secondary !px-4 !py-2 text-xs sm:text-sm dark:!text-white"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopCardClick}
              >
                <FaGithubSquare className="text-base" />
                GitHub
              </a>
            )}
            {liveLink && (
              <a
                className="btn-primary !px-4 !py-2 text-xs sm:text-sm"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopCardClick}
              >
                <HiOutlineExternalLink className="text-base" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}
