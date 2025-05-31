"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import Image from "next/image";
// Make sure to add the logo file

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 flex justify-center items-center px-6"
    >
      <div className="w-full max-w-4xl">
        <SectionHeading>Experience</SectionHeading>

        {/* Itransition Group Experience */}
        <motion.div
          className={`mt-6 mx-auto p-6 rounded-3xl shadow-xl transition-all ${theme === "light"
              ? "bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border border-gray-200"
              : "bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-700"
            }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/images.jpeg"
                alt="Itransition Group Logo"
                width={60}
                height={60}
                className="rounded-lg object-contain"
              />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  Frontend Developer Intern
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  Mar 2025 - May 2025 · 3 mos
                </span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                Itransition Group · Remote (Bangladesh)
              </h4>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Completed an internship focused on advanced frontend development.</li>
                <li>Worked on multiple tasks under strict technical criteria and deadlines, receiving continuous guidance through mentoring sessions</li>
                <li>Developed a feature-rich web application as a final project (customizable forms app). Defended the project through live presentations and code walkthroughs.</li>
                <li>Post-presentation, continued enhancing the app by integrating additional features.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Frontend Development
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  React
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  JavaScript
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                  Prisma
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  Bootstrap
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seeking Opportunities Card
        <motion.div
          className={`mt-6 mx-auto p-10 rounded-3xl shadow-xl transition-all ${
            theme === "light"
              ? "bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border border-gray-200"
              : "bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-700"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">
            Seeking Opportunities
          </h3>
          <h4 className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            Ready to Contribute and Grow
          </h4>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a recent university graduate actively seeking opportunities to 
            contribute to innovative projects while growing my skill set. 
            I am eager to collaborate with teams that value creativity and 
            technical proficiency. Let&#39;s work together to achieve great things.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}