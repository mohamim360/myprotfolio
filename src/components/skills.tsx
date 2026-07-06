"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsCategories } from "@/lib/data";
import type { IconType } from "react-icons";
import {
  SiAntdesign,
  SiBootstrap,
  SiBun,
  SiC,
  SiClerk,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiZod,
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { FaCuttlefish, FaDatabase } from "react-icons/fa";
import {
  BsBraces,
  BsCloudUpload,
  BsDatabase,
  BsGearWideConnected,
  BsLayers,
  BsWindowSidebar,
} from "react-icons/bs";

const categoryVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const categoryMeta: Record<
  string,
  { icon: IconType; accent: string; iconBox: string }
> = {
  Languages: {
    icon: BsBraces,
    accent: "from-amber-400 via-orange-400 to-pink-400",
    iconBox: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
  Frontend: {
    icon: BsWindowSidebar,
    accent: "from-sky-400 via-cyan-400 to-emerald-400",
    iconBox: "bg-sky-500/10 text-sky-600 dark:text-sky-300",
  },
  Backend: {
    icon: BsGearWideConnected,
    accent: "from-emerald-400 via-teal-400 to-cyan-400",
    iconBox: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  },
  "Databases & ORM": {
    icon: BsDatabase,
    accent: "from-violet-400 via-fuchsia-400 to-pink-400",
    iconBox: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
  "State & Forms": {
    icon: BsLayers,
    accent: "from-indigo-400 via-sky-400 to-cyan-400",
    iconBox: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300",
  },
  "DevOps & Tools": {
    icon: BsCloudUpload,
    accent: "from-slate-500 via-sky-400 to-emerald-400",
    iconBox: "bg-slate-500/10 text-slate-700 dark:text-slate-200",
  },
};

const skillLogos: Record<string, { icon: IconType; color: string }> = {
  "JavaScript (ES6+)": { icon: SiJavascript, color: "text-yellow-500" },
  TypeScript: { icon: SiTypescript, color: "text-blue-600" },
  HTML5: { icon: SiHtml5, color: "text-orange-600" },
  CSS3: { icon: SiCss3, color: "text-blue-500" },
  C: { icon: SiC, color: "text-blue-700" },
  "C++": { icon: FaCuttlefish, color: "text-indigo-600" },
  "React.js": { icon: SiReact, color: "text-cyan-500" },
  "Next.js": { icon: SiNextdotjs, color: "text-slate-950 dark:text-white" },
  "Vue.js": { icon: SiVuedotjs, color: "text-emerald-500" },
  "TanStack Start": { icon: SiReactquery, color: "text-red-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-sky-500" },
  Bootstrap: { icon: SiBootstrap, color: "text-violet-600" },
  "shadcn/ui": { icon: SiShadcnui, color: "text-slate-950 dark:text-white" },
  "Ant Design": { icon: SiAntdesign, color: "text-blue-500" },
  Vite: { icon: SiVite, color: "text-purple-500" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-600" },
  "Express.js": { icon: SiExpress, color: "text-slate-800 dark:text-white" },
  NestJS: { icon: SiNestjs, color: "text-red-600" },
  "Bun.js": { icon: SiBun, color: "text-slate-900 dark:text-white" },
  "REST API": { icon: BiCodeCurly, color: "text-sky-600" },
  Redis: { icon: SiRedis, color: "text-red-500" },
  Clerk: { icon: SiClerk, color: "text-violet-600" },
  JWT: { icon: SiJsonwebtokens, color: "text-pink-500" },
  MongoDB: { icon: SiMongodb, color: "text-green-600" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-700" },
  SQL: { icon: FaDatabase, color: "text-cyan-700" },
  Prisma: { icon: SiPrisma, color: "text-slate-800 dark:text-white" },
  Mongoose: { icon: SiMongoose, color: "text-red-700" },
  "Redux Toolkit": { icon: SiRedux, color: "text-purple-600" },
  Zod: { icon: SiZod, color: "text-blue-600" },
  "TanStack Query": { icon: SiReactquery, color: "text-red-500" },
  "React Hook Form": { icon: SiReacthookform, color: "text-pink-500" },
  Docker: { icon: SiDocker, color: "text-blue-500" },
  "CI/CD": { icon: BsGearWideConnected, color: "text-slate-600 dark:text-slate-200" },
  "GitHub Actions": { icon: SiGithubactions, color: "text-slate-900 dark:text-white" },
  Vercel: { icon: SiVercel, color: "text-slate-950 dark:text-white" },
  Netlify: { icon: SiNetlify, color: "text-teal-500" },
  Git: { icon: SiGit, color: "text-orange-600" },
  Postman: { icon: SiPostman, color: "text-orange-500" },
  Stripe: { icon: SiStripe, color: "text-indigo-600" },
  "VS Code": { icon: SiVuedotjs, color: "text-blue-500" },
  Cursor: { icon: BiCodeCurly, color: "text-slate-800 dark:text-white" },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="section-container mb-28 w-full scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="grid w-full gap-5 md:grid-cols-2">
        {skillsCategories.map((category, index) => {
          const meta = categoryMeta[category.title] ?? categoryMeta.Frontend;
          const CategoryIcon = meta.icon;

          return (
            <motion.div
              key={category.title}
              className="glass-card glass-card-hover group relative overflow-hidden p-5 text-left sm:p-6"
              custom={index}
              variants={categoryVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.accent}`}
              />
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${meta.iconBox}`}
                >
                  <CategoryIcon className="text-xl" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {category.skills.map((skill) => {
                  const logo = skillLogos[skill] ?? {
                    icon: BiCodeCurly,
                    color: "text-sky-600",
                  };
                  const SkillIcon = logo.icon;

                  return (
                    <span
                      key={skill}
                      className="flex min-h-12 items-center gap-2 rounded-xl border border-white/70 bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-card dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-200 dark:hover:bg-white/[0.11]"
                    >
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 shadow-sm dark:bg-white/10">
                        <SkillIcon className={`text-base ${logo.color}`} />
                      </span>
                      <span className="leading-tight">{skill}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
