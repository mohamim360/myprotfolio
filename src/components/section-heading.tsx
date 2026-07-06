"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 text-center sm:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-3xl font-semibold capitalize tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-sky-500/70" />
        <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-emerald-500/70" />
      </div>
    </motion.div>
  );
}
