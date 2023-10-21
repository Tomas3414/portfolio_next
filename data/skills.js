import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaBug,
  FaCode,
} from "react-icons/fa";

export const data = [
  {
    name: "Frontend",
    content: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    name: "Backend",
    content: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaServer /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
  },
  {
    name: "Tools",
    content: [
      { name: "Git", icon: <FaGit /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Postman", icon: <FaBug /> },
    ],
  },
];
