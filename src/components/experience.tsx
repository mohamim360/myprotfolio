"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

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
        <motion.div
          className={`mt-12 mx-auto p-10 rounded-3xl shadow-xl transition-all ${
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
            technical proficiency. Let’s work together to achieve great things.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
