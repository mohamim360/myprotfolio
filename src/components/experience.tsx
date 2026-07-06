"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="section-container mb-28 w-full scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Experience</SectionHeading>

      <motion.div
        className="glass-card glass-card-hover mx-auto p-5 shadow-card sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-shrink-0">
            <div className="inline-flex overflow-hidden rounded-xl border border-white/70 bg-white p-1.5 shadow-soft dark:border-white/10 dark:bg-slate-900">
              <Image
                src="/images.jpeg"
                alt="Itransition Group Logo"
                width={56}
                height={56}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
          <div className="flex-1 text-left">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 sm:text-xl">
                Frontend Developer Intern
              </h3>
              <span className="inline-flex w-fit rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-200">
                Mar 2025 - May 2025
              </span>
            </div>
            <h4 className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300 sm:text-base">
              Itransition Group - Remote (Bangladesh)
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                Completed multiple frontend tasks under strict guidelines and
                deadlines with regular mentoring sessions.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                Built and defended a full-featured form-based web application
                using React, TypeScript, Node.js, Prisma, PostgreSQL,
                Cloudinary, and Bootstrap.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-500" />
                Enhanced the final project with additional features and
                Dockerized the application for deployment.
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Prisma",
                "PostgreSQL",
                "Cloudinary",
                "Bootstrap",
                "Docker",
              ].map((skill) => (
                <span key={skill} className="skill-pill !text-[0.7rem]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
