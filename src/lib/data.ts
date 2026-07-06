import healthCareImage from "/public/Project_images/ChatGPT Image Jul 6, 2026, 10_30_45 AM.png";
import universityImage from "/public/Project_images/ChatGPT Image Jul 6, 2026, 10_47_20 AM.png";
import notionImage from "/public/Project_images/ChatGPT Image Jul 6, 2026, 11_09_42 AM.png";
import recipeImage from "/public/Project_images/ChatGPT Image Jul 6, 2026, 11_09_48 AM.png";
import hotelImage from "/public/Project_images/ChatGPT Image Jul 6, 2026, 11_09_57 AM.png";
import kanbanImage from "/public/Project_images/ChatGPT Image Jul 6, 2026, 11_10_03 AM.png";
import carRentingImage from "/public/Project_images/ChatGPT Image Jul 6, 2026, 11_10_09 AM.png";

export {
  personalInfo,
  educationData,
  languagesData,
  contestsData,
} from "./personal-info";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Courses", hash: "#course" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const courseData = [
  {
    title: "Complete Web Development Course",
    location: "With Jhankar Mahbub",
    description:
      "Six-month bootcamp covering HTML, CSS, JavaScript, Node.js, React.js, and MongoDB with extensive hands-on experience.",
    date: "2023",
  },
  {
    title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    location: "With Maximilian Schwarzmüller",
    description:
      "Built RESTful APIs with Node.js, Express, and MongoDB while exploring MVC patterns and modern backend architecture.",
    date: "2023 – 24",
  },
  {
    title: "Reactive Accelerator",
    location: "With Sumit Saha",
    description:
      "Developed real-time applications with React, Firebase, Next.js, and Redux for production-grade state management.",
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Smart Health Care",
    description:
      "Full-stack healthcare portal with RBAC (Patient/Doctor/Admin): doctor search and booking, Stripe payments, prescriptions, scheduling, and an AI assistant for booking and navigation support.",
    tags: [
      "TypeScript",
      "React",
      "TanStack Start",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "JWT",
    ],
    imageUrl: healthCareImage,
    githubLink:
      "https://github.com/mohamim360/SmartHealthCare-Hospital-Management-System",
    liveLink: "https://smarthealthcare-start.netlify.app/",
  },
  {
    title: "University Management System",
    description:
      "Built a role-based access system for students, faculty, and admins with backend APIs for real-time updates, semester and course management, and student progress tracking.",
    tags: [
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Zod",
    ],
    imageUrl: universityImage,
    githubLink: "https://github.com/mohamim360/academic-management",
  },
  {
    title: "Kanban Board Application",
    description:
      "Interactive full-stack Kanban board with drag-and-drop task management, editable tags, priority levels, user authentication, dark mode, and persistent state management.",
    tags: [
      "Vue 3",
      "Tailwind",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Clerk Auth",
    ],
    imageUrl: kanbanImage,
    githubLink: "https://github.com/mohamim360/Vue-Kanban-Board",
    liveLink: "https://vue-kanban-board-weld.vercel.app/",
  },
  {
    title: "Car Renting Platform",
    description:
      "Full-stack car rental platform with role-based access (Admin, Driver, User), allowing users to rent cars, drivers to bid, and admins to manage cars, users, rentals, and analytics.",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "shadcn/ui",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    imageUrl: carRentingImage,
    githubLink: "https://github.com/mohamim360/car-renting-frontend",
    liveLink: "https://car-renting-frontend.vercel.app/",
  },
  {
    title: "Hotel Booking System",
    description:
      "Search hotels, sort by rating, view detailed information, book rooms, and manage bookings with authentication and responsive design.",
    tags: ["Next.js", "TypeScript", "NextAuth.js", "Tailwind", "MongoDB"],
    imageUrl: hotelImage,
    githubLink: "https://github.com/mohamim360/Nextjs-Hotel-Booking-system",
    liveLink: "https://nextjs-hotel-booking-system.vercel.app/",
  },
  {
    title: "Recipe Website",
    description:
      "Recipe platform with server-side rendering, user authentication, and responsive design for a seamless browsing and saving experience.",
    tags: ["React", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: recipeImage,
    githubLink: "https://github.com/mohamim360/Recipe",
    liveLink: "https://recipe-taupe-kappa.vercel.app/",
  },
  {
    title: "Notion Clone",
    description:
      "Collaborative note-taking app with real-time editing, user authentication, and a rich text editor powered by Liveblocks and Firebase.",
    tags: ["Next.js", "Tailwind", "Liveblocks", "shadcn/ui", "Firebase"],
    imageUrl: notionImage,
    githubLink: "https://github.com/mohamim360/Notion_Clone",
    liveLink: "https://ai-notion-clone-hamim-five.vercel.app/",
  },
] as const;

export const skillsCategories = [
  {
    title: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "C",
      "C++",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TanStack Start",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      "Ant Design",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Bun.js",
      "REST API",
      "Redis",
      "Clerk",
      "JWT",
    ],
  },
  {
    title: "Databases & ORM",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Prisma", "Mongoose"],
  },
  {
    title: "State & Forms",
    skills: [
      "Redux Toolkit",
      "Zod",
      "TanStack Query",
      "React Hook Form",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "Git",
      "Postman",
      "Stripe",
      "VS Code",
      "Cursor",
    ],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Firebase",
  "Zod",
  "shadcn/ui",
] as const;
