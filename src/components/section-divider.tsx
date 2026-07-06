"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="relative my-12 flex h-12 items-center justify-center sm:my-16"
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="h-10 w-px bg-gradient-to-b from-transparent via-brand-400/40 to-transparent dark:via-brand-500/30" />
    </motion.div>
  );
}
