import { BsFiletypeScss } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { BiLogoNetlify } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaStripe,
  FaGithub,
  FaNpm,
  FaYarn,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiAxios,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiMongoose,
  SiVercel,
  SiRender,
  SiInsomnia,
  SiPostman,
} from "react-icons/si";

export const data = [
  {
    name: "Front-End",
    content: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "SASS/SCSS", icon: <BsFiletypeScss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux.js", icon: <SiRedux /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Firebase Auth", icon: <SiFirebase /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "GSAP", icon: <MdAnimation /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    name: "Back-End",
    content: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "Stripe", icon: <FaStripe /> },
    ],
  },
  {
    name: "Tools",
    content: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Npm", icon: <FaNpm /> },
      { name: "Yarn", icon: <FaYarn /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <BiLogoNetlify /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Insomnia", icon: <SiInsomnia /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Chrome dev tools", icon: <FaChrome /> },
    ],
  },
];
