// import eliteKitchenFindsArchitecture from "../../static/projectData/EliteKitchenFinds-Architecture.png";
// import eliteKitchenFindsDbSchema from "../../static/projectData/EliteKitchenFinds-Database-Schema.png";
// import EliteKitchenFindsComponentStructure from "../../static/projectData/EliteKitchenFinds-component-structure.png";
import eliteKitchenFindsImage from "../../static/images/elitekitchenfinds.png";

const EliteKitchenFindsData = {
  projectName: "Elite Kitchen Finds | Kitchenware E-commerce Platform",
  backgroundColor: "#ECEFED",
  backgroundImage: eliteKitchenFindsImage,
  description:
    "Elite Kitchen Finds, meticulously designed and developed for a client, presents a handpicked collection of superior kitchen essentials. This e-commerce platform is crafted to provide a premier destination for high-quality kitchenware, offering a seamless shopping experience with a curated selection of top-rated products.",
  demoVideo: "https://www.youtube.com/embed/MMCMi9ZtZEA?si=f1hkY2vQ7KRxhtw2",
  github: "",
  liveLink: "https://elitekitchenfinds.com/",
  //   API: "",
  role: "Full-stack Developer",
  techStack: "React, Next.js, Chakra UI, Sanity.io, Vercel",
  timeline: "January, 2024 - Present",
  //   architecture: eliteKitchenFindsArchitecture,
  //   dbSchema: eliteKitchenFindsDbSchema, // Replace with your actual image import
  //   componentStructure: EliteKitchenFindsComponentStructure, // Replace with your actual image import
  devFlow: {
    headings: [
      {
        heading: "Initial Setup and Configuration >>>",
        steps: {
          step1: {
            header: "Project Initialization",
            text: "Utilized create-next-app for rapid development setup, preparing a robust framework for the project's frontend.",
          },
          step2: {
            header: "Content Management System",
            text: "Configured Sanity.io as the backend CMS to manage and model the data schema for products and content effectively.",
          },
          step3: {
            header: "Design System Integration",
            text: "Implemented Chakra UI for its extensive component library to create a responsive and accessible user interface.",
          },
        },
      },
      {
        heading: "Frontend Development >>>",
        steps: {
          step1: {
            header: "Component Development",
            text: "Crafted custom React components tailored for various features such as product listings, category navigation, and shopping cart functionality.",
          },
          step2: {
            header: "Dynamic Routing",
            text: "Leveraged Next.js's dynamic routing capabilities to create SEO-friendly URLs and enhance the site's discoverability.",
          },
          step3: {
            header: "State Management",
            text: "Designed a state management solution to track user sessions and shopping cart data throughout the application lifecycle.",
          },
        },
      },
      {
        heading: "Backend Management >>>",
        steps: {
          step1: {
            header: "Schema Design",
            text: "Devised a structured content schema within Sanity Studio to define the relationships and properties of products, categories, and users.",
          },
          step2: {
            header: "Data Operations",
            text: "Developed CRUD operations and custom queries to interact with the database, ensuring data integrity and seamless content updates.",
          },
          step3: {
            header: "Real-time Updates",
            text: "Enabled real-time content preview features in Sanity, allowing for immediate reflection of content changes on the live site.",
          },
        },
      },
      {
        heading: "Testing and Optimization >>>",
        steps: {
          step1: {
            header: "Component Testing",
            text: "Conducted rigorous unit and integration tests on key frontend components to ensure reliability and stability.",
          },
          step2: {
            header: "Performance Tuning",
            text: "Optimized website performance through various techniques, achieving superior loading times and high scores on performance metrics.",
          },
          step3: {
            header: "Backend Reliability",
            text: "Implemented robust error handling and logging mechanisms in the backend to monitor and rectify issues proactively.",
          },
        },
      },
      {
        heading: "Deployment and Launch >>>",
        steps: {
          step1: {
            header: "Deployment Setup",
            text: "Configured the project on Vercel for continuous deployment, linking it with the GitHub repository to automate the deployment process.",
          },
          step2: {
            header: "Pre-launch Validation",
            text: "Performed a series of pre-launch checks to identify and resolve any outstanding issues before making the site accessible to the public.",
          },
          step3: {
            header: "Project Launch",
            text: "Successfully launched the e-commerce platform, closely monitoring initial user interactions and feedback to make data-driven enhancements.",
          },
        },
      },
    ],
  },
  keyChallenges: [
    {
      header: "Managing State Across Components",
      solution:
        "Utilized React Context API and custom hooks to share state effectively across components without prop drilling.",
    },
    {
      header: "Ensuring Data Integrity",
      solution:
        "Used Sanity.io's validation features to enforce data structure and consistency as content is updated.",
    },
  ],
  learnings: [
    {
      header: "Proficiency in Sanity.io for Content Management",
      text: "Gained proficiency in using Sanity.io for content management and real-time updates, learning to leverage its capabilities for efficient content operations.",
    },
    {
      header: "Understanding Next.js for Optimized Performance",
      text: "Deepened understanding of Next.js features such as server-side rendering and static generation for optimized performance, contributing to faster load times and improved SEO.",
    },
    {
      header: "Responsive UI Design with Chakra UI",
      text: "Enhanced skills in responsive UI design with Chakra UI and custom CSS, focusing on creating intuitive and aesthetically pleasing user interfaces.",
    },
  ],
  notes: [
    {
      text: "Monitoring website performance and user interactions post-launch provides insights for iterative improvements, emphasizing the need for ongoing optimization and user feedback integration.",
    },
  ],
};

export default EliteKitchenFindsData;
