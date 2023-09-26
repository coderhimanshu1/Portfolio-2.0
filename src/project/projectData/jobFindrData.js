const JobFindrData = {
  projectName: "Job Findr | Job Search Platform",
  backgroundColor: "#ECEFED",
  description:
    "Full-stack application leveraging ReactJS and Express. This project integrates a robust job search API I built using Express, providing seamless access to dynamic job data. The seamless data sharing across the site, accomplished using React's useContext hook, attests to my proficiency in building secure, intuitive, and interactive web applications.",
  demoVideo: "https://www.youtube.com/embed/7PRzSLfWFjs?si=qW0Dp6FD7h4hjDOI",
  github: "https://github.com/coderhimanshu1/React-Job-Findr",
  liveLink: "https://job-findr.onrender.com/",
  API: "https://coderhimanshu1.github.io/Job-Search-API/",
  role: "Full-stack Engineer",
  techStack: "React, Node.js, express.js, PostgreSQL, RESTful API",
  timeline: "June, 2023 - July, 2023",
  //   architecture: remplr2Architecture,
  //   dbSchema: remplr2DbSchema,
  //   componentStructure: Remplr2ComponentStructure,
  devFlow: {
    headings: [
      {
        heading: "Backend API Development >>>",
        steps: {
          step1: {
            header: "Helper Functions for SQL Statements",
            text: "Created helper functions to generate partial SQL statements for database operations. These functions streamlined the process of building and executing queries.",
          },
          step2: {
            header: "Authorization Middlewares",
            text: "Implemented middleware functions to handle user authorization. This ensured that only authenticated users could access certain routes, enhancing security.",
          },
          step3: {
            header: "Models for CRUD Operations",
            text: "Created models containing methods for performing CRUD (Create, Read, Update, Delete) operations on the database. These models were specific to maintaining database relationships, ensuring data consistency.",
          },
          step4: {
            header: "Route Handling",
            text: "Developed routes to handle various API endpoints. Routes were organized based on resource types (users, jobs, companies, etc.). Each route utilized the corresponding model methods to process requests.",
          },
        },
      },
      {
        heading: "Frontend Development >>>",
        steps: {
          step1: {
            header: "API Helper",
            text: "Designed an API helper to facilitate communication between the frontend and backend. This module encapsulated API requests and responses, making it easier to manage data retrieval and submission.",
          },
          step2: {
            header: "Custom Hooks",
            text: "Created custom hooks to manage state and side effects in functional components. These hooks abstracted complex logic, promoting code reuse and maintainability.",
          },
          step3: {
            header: "Routing",
            text: "Implemented routing using React Router to handle navigation within the application. Defined routes for different views, ensuring a smooth user experience.",
          },
        },
      },
      {
        heading: "Testing >>>",
        steps: {
          unitTestsBackend: {
            header: "Backend Testing - Unit Tests",
            text: "Developed comprehensive unit tests for each helper function responsible for generating SQL statements. This ensured the accuracy and reliability of the query-building process.",
          },
          integrationTestsBackend: {
            header: "Backend Testing - Integration Tests",
            text: "Conducted integration tests to verify the functionality of authorization middleware. Tests included scenarios for both authorized and unauthorized access.",
          },
          modelTests: {
            header: "Backend Testing - Model Tests",
            text: "Implemented tests for the CRUD operations in the models. This involved creating test data, performing operations, and asserting the expected outcomes.",
          },
          routeTests: {
            header: "Backend Testing - Route Tests",
            text: "Tested each API route using a combination of mock requests and actual database interactions. Checked for correct handling of requests, status codes, and responses.",
          },
          unitTestsFrontend: {
            header: "Frontend Testing - Unit Tests",
            text: "Employed testing libraries like Jest and React Testing Library to write unit tests for components, ensuring they render correctly and handle state and props appropriately.",
          },
          integrationTestsFrontend: {
            header: "Frontend Testing - Integration Tests",
            text: "Conducted integration tests to ensure that the frontend components interacted with the backend API as expected. This included testing data retrieval, submission, and error handling.",
          },
        },
      },
    ],
  },
  keyChallenges: [
    {
      header: "Securing Environment Variables",
      challenge:
        "Ensuring sensitive configuration and API keys are kept secure and not exposed in the code.",
      solution:
        "Utilized environment variables to store sensitive information, ensuring that they're not checked into version control and are securely managed in production environments.",
    },
  ],
  learnings: [
    {
      header: "React's Compositional Model",
      text: "Throughout the Remplr project, I gained a deep understanding of React's compositional model. This allowed me to create reusable components and improved the overall development workflow.",
    },
    {
      header: "Effective State Management",
      text: "Managing state in a React application is a critical aspect of building dynamic and interactive user interfaces. Through the Remplr project, I have utilized tools like React's Context that allowe me to manage the application's state, ensuring seamless data flow and consistent user experiences.",
    },
  ],
};

export default JobFindrData;
