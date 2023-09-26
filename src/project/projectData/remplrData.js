import remplr2Architecture from "../../static/projectData/Remplr-Design-Architecture.png";
import remplr2DbSchema from "../../static/projectData/Remplr-Database-Schema.png";
import Remplr2ComponentStructure from "../../static/projectData/Remplr-component-structure.png";

const RemplrData = {
  projectName: "Remplr | Meal Planner Platform",
  backgroundColor: "#ECEFED",
  description:
    "Tailored for nutritionists, offering features like user authentication, recipe discovery, meal planning, and in-depth recipe information.",
  demoVideo: "https://www.youtube.com/embed/8b2YMKrCO0w?si=hyAOQjOHRTwCUEw8",
  github: "https://github.com/coderhimanshu1/REMPLR-2.0",
  liveLink: "https://remplr.com/",
  API: "https://coderhimanshu1.github.io/Remplr-backend/",
  role: "Full-stack Engineer",
  techStack: "React, Node.js, express.js, PostgreSQL, RESTful API",
  timeline: "July, 2023 - August, 2023",
  architecture: remplr2Architecture,
  dbSchema: remplr2DbSchema,
  componentStructure: Remplr2ComponentStructure,
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
            text: "Developed routes to handle various API endpoints. Routes were organized based on resource types (users, recipes, meal plans, etc.). Each route utilized the corresponding model methods to process requests.",
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
      {
        heading: "Deployment >>>",
        steps: [
          {
            header: "Creating a Render Account",
            text: "Signed up for a Render account at https://render.com/. Completed the registration process to set up a new account or logged in if an account already existed.",
          },
          {
            header: "Setting Up a New Web Service",
            text: "Navigated to the Render Dashboard and clicked on 'Add New' to initiate the creation of a new web service. Selected the appropriate settings, including the environment (e.g., Node.js for React) and chosen region.",
          },
          {
            header: "Linking Your Git Repository",
            text: "Connected the Git repository (used GitHub) to Render, allowing Render to automatically deploy the project whenever changes were pushed to the repository.",
          },
          {
            header: "Configuring Build Settings",
            text: "Specified the build command and provided the directory where the React project was located. For instance, set the build command as 'npm run build' and the build directory as 'build/' which is standard for React applications.",
          },
          {
            header: "Setting Environment Variables (Optional)",
            text: "Added any necessary environment variables in the Render Dashboard. This was particularly useful for sensitive information or configuration values that should not be hard-coded in the project.",
          },
          {
            header: "Configuring Automatic Deployments",
            text: "Enabled automatic deployments to ensure that Render automatically updated the web service whenever changes were pushed to the linked Git repository. This kept the project current and up-to-date.",
          },
          {
            header: "Custom Domain and SSL (Optional)",
            text: "Configured a custom domain in the Render Dashboard for a personalized URL. Additionally, set up SSL for secure connections. Took advantage of Render's provision of free SSL certificates for the domains.",
          },
          {
            header: "Deploying Your React Project",
            text: "Pushed changes to the linked Git repository. Render detected the changes and automatically deployed the React project based on the specified build settings. Monitored the deployment process through the Render Dashboard.",
          },
          {
            header: "Accessing Your Deployed Project",
            text: "After the deployment process was complete, accessed the live React-based project by visiting the provided URL in the Render Dashboard. The application was now accessible to users on the internet.",
          },
        ],
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
    {
      header: "Linking Nutritionists with Clients and Sharing Meal Plans",
      challenge:
        "A major requirement was to connect nutritionists and clients in a way that allowed meal plans to be shared between them seamlessly.",
      solution:
        "Introduced a new table and methods to facilitate the linking of a client to a nutritionist. Only nutritionists or admins have the capability to add a client, which in turn automatically establishes a link between the client and the nutritionist.",
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
    {
      header: "Backend Design Architecture",
      text: "Designing a robust backend architecture is paramount for building scalable and maintainable applications. In the Remplr project, I carefully crafted an architecture using Express.js and Node.js that prioritized efficiency, security, and extensibility. This included creating modular routes, implementing middleware functions, and structuring models for efficient database interactions. ",
    },
    {
      header: "Note:",
      text: "Though the second feature 'Linking Nutritionists with Clients and Sharing Meal Plans' is not implemented on the front end yet, I have successfully solved this challenge at the backend.",
    },
  ],
};

export default RemplrData;
