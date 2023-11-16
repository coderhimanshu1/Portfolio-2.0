import jobFindr from "../static/projects/jobFindr.gif";
import currencyConverter from "../static/projects/currencyConverter.gif";
import jeopardy from "../static/projects/jeopardy.gif";
import remplr2 from "../static/projects/remplr2.gif";
import remplr1 from "../static/projects/remplr1.gif";
import pathos from "../static/projects/pathos.gif";
import pathosBadge from "../static/icons/Pathos-badge.PNG";

const Projects = [
  {
    id: 1,
    title: "Pathos | AI-powered Empathy enhancer",
    linkData: "pathos",
    description:
      "Award winning AI-powered platform aiming to boost empathy and emotional intelligence in remote workplace environments.",
    image: pathos,
    badge: pathosBadge,
    backgroundColor: "#F7F0F9",
  },
  {
    id: 2,
    title: "Remplr | Meal Planner Platform",
    linkData: "remplr",
    description:
      "Meal Planner platform tailored for nutritionists, offering features like user authentication, meal planning, and in-depth recipe information.",
    image: remplr2,
    backgroundColor: "#ECEFED",
  },
  {
    id: 3,
    title: "Job Findr | Job Search Platform",
    linkData: "Job-Findr",
    description:
      "Full-stack application leveraging ReactJS and Express, integrates a robust job search API built using Express, providing seamless access to dynamic job data.",
    image: jobFindr,
    backgroundColor: "#FFFAE6",
  },
  {
    id: 4,
    title: "Remplr | Vegetarian focussed meal planner",
    linkData: "remplr-veg",
    description:
      "Database-driven full-stack web app built using a range of technologies such as Flask, PostgreSQL and JavaScript.",
    image: remplr1,
    backgroundColor: "#FFF6F3",
  },
  {
    id: 5,
    title: "Currency Converter",
    linkData: "currency-converter",
    description:
      "App build on popular Python framework: Flask built using API: exchangerate.host. ",
    image: currencyConverter,
    backgroundColor: "#F2F4E7",
  },
  {
    id: 6,
    title: "Jeopardy Game",
    linkData: "jeopardy",
    description:
      "Jeopardy quiz show replica based on Javascript and DOM manipulation.",
    image: jeopardy,
    backgroundColor: "#E8E8D3",
  },
];

export default Projects;
