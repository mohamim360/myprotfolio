"use client";

import React, { JSX, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BsTools, BsBook, BsBriefcase, BsEnvelope } from "react-icons/bs";

const linkIcons: Record<string, JSX.Element> = {
  Home: <AiOutlineHome />,
  About: <AiOutlineUser />,
  Projects: <AiOutlineProject />,
  Skills: <BsTools />,
  Courses: <BsBook />,
  Experience: <BsBriefcase />,
  Contact: <BsEnvelope />,
};

export default function Header() {
  const { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (Date.now() - timeOfLastClick < 700) {
        ticking = false;
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let currentSection: (typeof links)[number]["name"] = links[0].name;

      for (const link of links) {
        const section = document.querySelector(link.hash);

        if (
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPosition
        ) {
          currentSection = link.name;
        }
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [setActiveSection, timeOfLastClick]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof links)[number]
  ) => {
    event.preventDefault();
    const target = document.querySelector(link.hash);

    if (target) {
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - 96;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });
      window.history.pushState(null, "", link.hash);
    }

    setActiveSection(link.name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[999] flex justify-center px-3 pt-3 sm:px-4 sm:pt-5">
      <motion.nav
        className="glass-panel flex h-[3.65rem] w-full max-w-[min(100%,42rem)] items-center rounded-full px-2 shadow-card sm:max-w-[48rem] lg:max-w-[56rem]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        aria-label="Main navigation"
      >
        <ul className="flex w-full items-center justify-between gap-0.5 overflow-x-auto px-1 [scrollbar-width:none] sm:justify-center sm:gap-1 lg:gap-2 [&::-webkit-scrollbar]:hidden">
          {links.map((link, index) => (
            <motion.li
              className="relative flex-shrink-0"
              key={link.hash}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.04,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center gap-1 rounded-full px-2.5 py-2 text-[0.7rem] font-medium transition-colors duration-200 sm:px-3 sm:text-xs lg:gap-1.5 lg:px-3.5 lg:text-sm",
                  "text-gray-500 hover:text-sky-700 dark:text-gray-400 dark:hover:text-white",
                  {
                    "text-slate-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={(event) => handleNavClick(event, link)}
                title={link.name}
              >
                <span className="text-base lg:text-lg" aria-hidden="true">
                  {linkIcons[link.name]}
                </span>
                <span className="hidden min-[420px]:inline lg:inline">
                  {link.name}
                </span>

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-soft ring-1 ring-sky-100 dark:bg-white/10 dark:ring-white/10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
