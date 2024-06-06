import remplr1DbSchema from "../../static/projectData/Remplr1-Database-Schema.webp";
import remplr1CustomerJourney from "../../static/projectData/Remplr1-customer-journey.webp";

const RemplrData = {
  projectName: "Remplr | Meal Planner Platform",
  backgroundColor: "#FFF6F3",
  description:
    "Tailored for nutritionists, offering features like user authentication, recipe discovery, meal planning, and in-depth recipe information.",
  demoVideo: "https://www.youtube.com/embed/9KFV8DqMros?si=vAL3LCqUQ4GNw3kI",
  github: "https://github.com/coderhimanshu1/REMPLR-1.0",
  liveLink: "https://remplr.onrender.com/",
  dbSchema: remplr1DbSchema,
  customerJourney: remplr1CustomerJourney,
  role: "Full-stack Engineer",
  techStack: "Python, Flask, wtforms, PostgreSQL and JavaScript",
  timeline: "April, 2023 - May, 2023",
  devFlow: {
    headings: [
      {
        heading: "Backend Development >>>",
        steps: {
          step1: {
            header: "Models for CRUD Operations",
            text: "Created models containing methods for performing CRUD (Create, Read, Update, Delete) operations on the database. These models were specific to maintaining database relationships, ensuring data consistency.",
          },
          step2: {
            header: "Integration of WTForms for Form Generation",
            text: "Incorporated WTForms to streamline form generation within the Flask application. WTForms were utilized to generate forms for data input, providing an intuitive interface for interacting with the application.",
          },
          step3: {
            header: "Route Handling",
            text: "Developed routes to handle various API endpoints. Routes were organized based on resource types (users, recipes, meal plans, etc.). Each route utilized the corresponding model methods to process requests.",
          },
          step4: {
            header: "Jinja Template Rendering",
            text: "Expanded route handling to accommodate the integration of Jinja templates. Each route rendered Jinja templates to provide dynamic and visually appealing interfaces for users.",
          },
        },
      },
      {
        heading: "Frontend Development >>>",
        steps: {
          step1: {
            header: "Dynamic Form Handling",
            text: "Utilized JavaScript and jQuery to dynamically handle form visibility and input requirements based on user selections. This enhanced the user experience by providing intuitive form interactions.",
          },
          step2: {
            header: "Navbar and UI Elements",
            text: "Implemented a responsive navbar with toggling functionality for improved navigation. Additionally, designed UI elements like buttons and windows to enhance the overall user interface.",
          },
          step3: {
            header: "Meal Planner Interface",
            text: "Created interactive functions to generate and manage the meal planner interface. This included dynamically generating rows and cells for meal planning, as well as handling user interactions for adding recipes.",
          },
          step4: {
            header: "Recipe Search Integration",
            text: "Integrated Spoonacular API for recipe search functionality within the meal planner. Implemented features like live search, displaying search results, and adding selected recipes to the meal plan.",
          },
        },
      },

      {
        heading: "Testing >>>",
        steps: {
          step1: {
            header: "Environment Configuration and Database Setup",
            text: "Configured the test environment by creating a separate instance for testing purposes. Defined testing configurations, including setting up a PostgreSQL database for testing ('remplr_test'). Utilized Flask's built-in test client to interact with the application.",
          },
          step2: {
            header: "Testing with Nutritionist Session",
            text: "Simulated a session with a logged-in nutritionist by setting the 'nutritionist_id' in the session. Created a sample nutritionist ('John Doe') in the database, associated with the session. Verified that the homepage ('/') correctly displays the nutritionist's name.",
          },
          step3: {
            header: "Testing with Client Session",
            text: "Simulated a session with a logged-in client by setting the 'client_id' in the session. Added a sample client ('Jane Doe') to the database, linked to the session. Confirmed that the homepage ('/') accurately displays the client's name.",
          },
          step4: {
            header: "Testing Without User Session",
            text: "Ensured that the homepage ('/') functions correctly when no user is logged in. Verified that no user information is displayed in this scenario.",
          },
          step5: {
            header: "Register Page Test",
            text: "Checked the registration page by sending a GET request to '/Register'. Confirmed that the page successfully renders, displaying the 'Registration' content.",
          },
          step6: {
            header: "Registering a Nutritionist (Success)",
            text: "Sent a POST request to '/register/nutritionist' with valid nutritionist registration data. Validated that the response indicates a successful account creation with the message 'Successfully Created Your Account!'. Confirmed that a session for the nutritionist is established.",
          },
          step7: {
            header: "Registering a Nutritionist (Existing User)",
            text: "Attempted to register a nutritionist with existing credentials. Created a nutritionist record in the database with the same username and email. Sent a POST request to '/register/nutritionist' with the duplicate credentials. Verified that the response contains an error message indicating that the username or email is already taken.",
          },
          step8: {
            header: "Registering a Nutritionist (Invalid Form)",
            text: "Submitted a POST request to '/register/nutritionist' with nutritionist registration data containing an invalid email address. Ensured that the response displays an error message indicating 'Invalid email address.'.",
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
            text: "Navigated to the Render Dashboard and clicked on 'Add New' to initiate the creation of a new web service. Selected the appropriate settings, including the environment (e.g., Python for Flask) and chosen region.",
          },
          {
            header: "Linking Your Git Repository",
            text: "Connected the Git repository (used GitHub) to Render, allowing Render to automatically deploy the project whenever changes were pushed to the repository.",
          },
          {
            header: "Configuring Build Settings",
            text: "Specified the build command and provided the directory where the Flask project was located. For instance, set the build command as 'gunicorn app:app' and the build directory as the root directory of the Flask application.",
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
            header: "Deploying Your Flask Project",
            text: "Pushed changes to the linked Git repository. Render detected the changes and automatically deployed the Flask project based on the specified build settings. Monitored the deployment process through the Render Dashboard.",
          },
          {
            header: "Accessing Your Deployed Project",
            text: "After the deployment process was complete, accessed the live Flask-based project by visiting the provided URL in the Render Dashboard. The application was now accessible to users on the internet.",
          },
        ],
      },
    ],
  },
  keyChallenges: [
    {
      header: "Integration of JavaScript for Dynamic UI",
      challenge:
        "Incorporating JavaScript to create a dynamic user interface for the meal planner posed a challenge in terms of synchronizing the frontend with backend functionality.",
      solution:
        "Implemented JavaScript functions to generate and manage the meal planner interface dynamically. This allowed for interactive features like adding, editing, and deleting meals for different days of the week.",
    },
    {
      header: "Implementing Form Handling with WTForms",
      challenge:
        "Integrating WTForms for form generation and handling posed a challenge in terms of mapping form data to backend models and managing form validation.",
      solution:
        "Leveraged WTForms to generate forms within the Flask application. Implemented form handling logic to process user input and validate data before submission. Mapped form fields to corresponding database models for seamless data management.",
    },
    {
      header: "Managing Database Relationships with SQLAlchemy",
      challenge:
        "Establishing and maintaining database relationships while ensuring data consistency proved to be a complex task.",
      solution:
        "Utilized SQLAlchemy to define and manage database models, ensuring proper relationships between different entities (e.g., users, recipes, meal plans). Implemented methods for performing CRUD operations on the database to maintain data integrity.",
    },
  ],
  learnings: [
    {
      header: "Effective Use of JavaScript for Frontend Interactivity",
      text: "Learned how to leverage JavaScript to create an interactive frontend, allowing users to dynamically interact with the meal planner. This included functions for adding, editing, and deleting meals, enhancing the overall user experience.",
    },
    {
      header: "Seamless Integration of External APIs",
      text: "Gained experience in integrating external APIs, specifically the Spoonacular API for recipe search. This involved sending API requests, parsing responses, and displaying relevant information in the meal planner interface.",
    },
    {
      header: "Database Modeling and Relationship Management",
      text: "Acquired proficiency in defining and managing database models using SQLAlchemy. This included establishing relationships between different entities, implementing CRUD operations, and maintaining data integrity throughout the application.",
    },
  ],
  notes: [
    {
      text: "This is an mvp of first version of Remplr where main features were implemented for nutritionist login",
    },
  ],
};

export default RemplrData;
