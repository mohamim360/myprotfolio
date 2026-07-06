"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-panel shadow-card transition-all hover:scale-110 active:scale-95"
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <BsSun className="text-lg text-amber-500" />
      ) : (
        <BsMoon className="text-lg text-brand-400" />
      )}
    </motion.button>
  );
}
