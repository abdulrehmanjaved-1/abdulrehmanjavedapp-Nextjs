import { RiComputerLine } from "react-icons/ri";
import { FaServer,FaDatabase } from "react-icons/fa";
import { AiOutlineAntDesign, AiTwotoneApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { SiDocker } from "react-icons/si";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a scalable SPA/MPA using <b> React.js</b>, <b>Next.js</b>, <b>Framer Motion</b> and <b>Three.js</b>",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle databases, using <b>Express </b> & other popular frameworks or using headless CMS like <b>Sanity</b>",
  },
  {
    Icon: AiTwotoneApi,
    title: "API Development",
    about:
      "Develop robust  REST API using <b>Node</b>, GROQ API using <b>Sanity Studio</b> and Graphql using <b>Apollo</b> ",
  },
 
  {
    Icon: FaDatabase,
    title: "Database Developer",
    about:
      "Use <b>Postgresql</b>,<b>Redis</b>,<b>Mongodb</b> to develop complex aggregation pipelines with ORM like <b>Prisma</b>"
  },
  {
    Icon: SiDocker,
    title: "DevOps Engineer",
    about:
      "Skilled in Docker, Kubernetes, and CI/CD for streamlined containerization" ,
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Three",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "80",
  },
  
  {
    Icon: BsCircleFill,
    name: "Graphql",
    level: "85",
  }
  

];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "WordPress",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Atom",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "55",
  },
];

export const projects: IProject[] = [
  { 
    name: "E-commerce App",
    description:
      "This app use a full fledge approach with different tools and integrations of techs",
    image_path: "/images/ecomerce.jpg",
    deployed_url: "https://ecommerce-backend-rust.vercel.app/",
    github_url: "https://github.com/abdulrehmanjaved-1/Ecommerce-Backend",
    category: ["react","mongo","node"],
    key_techs: ["React", "Redux Toolkit", "Express","Stripe","Mongoose","TailwindCSS"],
  },
  {
    name: "AI-PromptMaker / Daily Postings",
    image_path: "/images/ai.jpg",
    deployed_url: "https://ai-prompt-maker.vercel.app/",
    github_url: "https://github.com/abdulrehmanjaved-1/AI-promptMaker",
    category: ["mongo","GAI"],
    description:
      "You can contribute for good ranking prompts and search others according to your need .This app uses Kinde for authentication and still is in progress.",
    key_techs: ["NextJS 13", "Kinde", "Google_Cloud_console"],
  },

  {
    name: "Video Chat-App - With perr to peer",
    image_path: "/images/webrtc.jpg",
    deployed_url: "https://github.com//abdulrehmanjaved-1/webRTC",
    github_url: "https://github.com//abdulrehmanjaved-1/webRTC",
    category: ["node", "mongo", "react"],
    description:
      "This app will connect you and your team with peer to peer. Now you might be wondering how so we are using WebRTC. Tag: In Progress...",
    key_techs: [
      "React",
      "WebSockets",
      "Node",
      "Express",
      "RTCPeerConnection",
      "GQL API",
    ],
  },

  {
    name: "CMS with Sanity",
    image_path: "/images/sanity.jpeg",
    deployed_url: "https://github.com/abdulrehmanjaved-1/Sanity-GROQ",
    github_url: "https://github.com/abdulrehmanjaved-1/Sanity-GROQ",
    category: ["node", "react"],
    description:
      "Basic Realtime Blog App with Nextjs 13 and Sanity v3 ,where one can create Blogs and invite others to contribute .Tag: In Progress...",
    key_techs: ["Next.JS", "Sanity"],
  },

  {
    name: "Global News Updates",
    image_path: "/images/news.jpeg",
    deployed_url: "https://github.com/abdulrehmanjaved-1/News-App",
    github_url: "https://github.com/abdulrehmanjaved-1/News-App",
    category: ["react"],
    description:
      "First React Project :) | Typical News Media App where one can Watch ,like ,comment etc",
    key_techs: ["React","Bootstrap"],
  },
  {
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/abdulrehmanjaved-1",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "My first Portfolio with React only :) |",
    image_path: "/images/mui.jpg",
    deployed_url: "https://abdulrehmanjaved.netlify.app/",
    github_url: "https://github.com/abdulrehmanjaved-1/My-Portfolio",
    category: ["react"],
    description:
      'Just for Practice plain React, CSS and MUI',
    key_techs: [
      "React",
      "CSS",
      "Material UI"
    ],
  },
  {
    name: "(Recent Projects and Tech Stacks)",
    image_path: "/images/gitsint.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/abdulrehmanjaved-1",
    category: ["react","express","mongo","node"],
    description:
      "All public projects for open-source. Click for visit",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap","Sanity","GROQ","Gaphql","Docker","Docker Compose"],
  },
];
