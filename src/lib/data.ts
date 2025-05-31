import dash from "/public/dash.PNG";
import dash1 from "/public/Capture.PNG";
import dash2 from "/public/Capture1.PNG";
import dash3 from "/public/1.PNG";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Courses",
    hash: "#course",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const courseData = [
  {
    title: "Complete Web Development Course",
    location: "With Jhankar Mahbub",
    description:
      "It was a six-month Bootcamp that provided extensive hands-on experience. I gained valuable knowledge from the course, which primarily focused on Html, Css, JavaScript, Node.js, React.js and MongoDB.",

    date: "2023",
  },
  {
    title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    location: "with Maximilian Schwarzmüller",
    description:
      "I learned how to build a RESTful API with Node.js, Express, and MongoDB.",

    date: "2023 - 24",
  },
  {
    title: "Reactive Accelerator",
    location: "With Sumit Saha",
    description:
      "I learned how to build a real-time application with React, Firebase, Next.js and Redux.",

    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "University Management System",
    description:
      "Built this system with role-based access to control who can see and do what, depending on whether they are students,faculty, or admins.",
    tags: [
      "React",
      "MongoDB",
      "Tailwind",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "Zod",
    ],
    imageUrl: dash,
    githubLink: "https://github.com/mohamim360/academic-management",
  
  },
  {
    title: "Hotel Booking System",
    description:
      "This system has functionalities such as searching for hotels, sorting them by rating, viewing detailed information, booking rooms, and managing bookings.",
    tags: ["Next.js", "TypeScript", "NextAuth.js", "Tailwind", "MongoDB"],
    imageUrl: dash2,
    githubLink: "https://github.com/mohamim360/Nextjs-Hotel-Booking-system",
    liveLink: "https://nextjs-hotel-booking-system.vercel.app/",
  },
  {
    title: "Recipe Website",
    description:
      "A recipe website with server-side rendering, user authentication, and responsive design for a seamless user experience.",
    tags: ["React", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: dash1,
    githubLink: "https://github.com/mohamim360/Recipe",
    liveLink: "https://recipe-taupe-kappa.vercel.app/",
  },
  {
    title: "Notion Clone",
    description:
      "The Notion Clone is a collaborative note-taking application built with Next.js, Firebase, and Liveblocks. It integrates features like real-time editing, user authentication, and a rich text editor.",
    tags: ["Next.js", "Tailwind", "liveblocks", "shadcn/ui", "firebase"],
    imageUrl: dash3,
    githubLink: "https://github.com/mohamim360/Notion_Clone",
    liveLink: "https://ai-notion-clone-hamim-five.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",

  "MongoDB",
  "Redux",

  "Express",
] as const;
