import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import web from "../assets/web.png";
import typescript from "../assets/typescript.png";
import ux from "../assets/ux.png";
import reacr from "../assets/reacr.png";
import git from "../assets/git.png";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/pro3.jpg";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reacr,
  },
  {
    title: "UI/UX Designer",
    icon: ux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "ExpenseX",
    description:
      "ExpenseX is an Expense Management System used to track various expenditures. A Web App using NodeJS, ExpressJS, MongoDB as backend and HTML, CSS, React for frontend.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/amankp12/ExpenseX",
    source_deploy_link: "https://rich-teal-shrimp-cap.cyclic.app/login",
  },
  {
    name: "CryptoTracker",
    description:
      "Web App using HTML5, CSS3, JavaScript to track the live data like Price, Volume, Change, etc. for several Cryptocurrencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/amankp12/CryptoTracker",
    source_deploy_link: "https://heroic-horse-a324d2.netlify.app/",
  },
  {
    name: "Todo List",
    description:
      "Created a visually appealing Todo List using HTML, CSS, and JavaScript and React.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/amankp12/FilmFlix",
    source_deploy_link: "https://github.com/amankp12/FilmFlix",
  },
];
export { services, technologies, projects };