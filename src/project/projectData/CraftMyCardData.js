import craftMyCardImage from "../../static/projects/craftmycard.png";

const CraftMyCardData = {
  projectName: "CraftMyCard | Handmade Greeting Cards [In progress]",
  backgroundColor: "#FFF8F1",
  backgroundImage: craftMyCardImage,
  description:
    "CraftMyCard is an online platform for creating and purchasing handmade greeting cards. It allows users to personalize their cards with custom designs, colors, and messages, making every card unique and special.",
  demoVideo: "",
  github: "",
  liveLink: "https://craftmycard.com/",
  role: "Full-stack Developer",
  techStack:
    "React, Next.js, Tailwind CSS, PostgreSQL, Prisma, AWS S3, Docker, Vercel",
  timeline: "January, 2024 - Present",
  devFlow: {
    headings: [
      {
        heading: "Initial Setup and Configuration >>>",
        steps: {
          step1: {
            header: "Project Initialization",
            text: "Used create-next-app to set up the development environment, ensuring a robust foundation for the project's frontend.",
          },
          step2: {
            header: "Database Configuration",
            text: "Configured PostgreSQL as the database using Prisma as the ORM, establishing a structured data model for users, products, and customizations.",
          },
          step3: {
            header: "Storage Setup",
            text: "Integrated AWS S3 for storing images and other assets, enabling efficient and scalable file management.",
          },
        },
      },
      {
        heading: "Frontend Development >>>",
        steps: {
          step1: {
            header: "Component Development",
            text: "Developed custom React components for various features such as the hero section, product gallery, and user authentication forms.",
          },
          step2: {
            header: "Styling with Tailwind CSS",
            text: "Implemented Tailwind CSS for styling components, ensuring a responsive and visually appealing user interface.",
          },
          step3: {
            header: "Client-side State Management",
            text: "Used React hooks and context API for managing client-side state, including user sessions and shopping cart data.",
          },
        },
      },
      {
        heading: "Backend Management >>>",
        steps: {
          step1: {
            header: "API Development",
            text: "Created server actions using Next.js API routes to handle user registration, login, and other CRUD operations.",
          },
          step2: {
            header: "Authentication",
            text: "Implemented JWT-based authentication to secure user data and manage sessions.",
          },
          step3: {
            header: "Data Operations",
            text: "Developed Prisma models and queries to interact with the PostgreSQL database, ensuring efficient and secure data operations.",
          },
        },
      },
      {
        heading: "Testing and Optimization >>>",
        steps: {
          step1: {
            header: "Component Testing",
            text: "Performed unit and integration tests on key frontend components to ensure reliability and stability.",
          },
          step2: {
            header: "Performance Optimization",
            text: "Optimized the application for performance, focusing on load times and responsiveness.",
          },
          step3: {
            header: "Error Handling",
            text: "Implemented comprehensive error handling and logging mechanisms to monitor and address issues proactively.",
          },
        },
      },
      {
        heading: "Deployment and Launch >>>",
        steps: {
          step1: {
            header: "Deployment Setup",
            text: "Configured the project for deployment on Vercel, ensuring seamless integration with the GitHub repository for continuous deployment.",
          },
          step2: {
            header: "Pre-launch Testing",
            text: "Conducted thorough testing before the public launch to identify and fix any outstanding issues.",
          },
          step3: {
            header: "Project Launch",
            text: "Successfully launched the CraftMyCard platform, continuously monitoring and improving based on user feedback.",
          },
        },
      },
    ],
  },
  keyChallenges: [
    {
      header: "Ensuring Responsive Design",
      solution:
        "Utilized Tailwind CSS's responsive utilities to create a design that adapts to different screen sizes seamlessly.",
    },
    {
      header: "Managing Customizations Efficiently",
      solution:
        "Implemented a robust customization model in Prisma to handle various user-selected customizations for greeting cards.",
    },
  ],
  learnings: [
    {
      header: "Enhanced Knowledge of Next.js",
      text: "Deepened understanding of Next.js features like API routes and server-side rendering, contributing to a more efficient development workflow.",
    },
    {
      header: "Practical Experience with Prisma",
      text: "Gained practical experience in using Prisma for database management and data modeling, streamlining backend operations.",
    },
    {
      header: "Effective Use of Tailwind CSS",
      text: "Improved skills in using Tailwind CSS to quickly build and style responsive, modern user interfaces.",
    },
  ],
  notes: [
    {
      text: "Continuous monitoring and iterative improvements based on user feedback are crucial for maintaining a high-quality user experience.",
    },
  ],
};

export default CraftMyCardData;
