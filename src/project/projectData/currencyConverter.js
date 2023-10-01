import remplr1DbSchema from "../../static/projectData/Remplr1-Database-Schema.png";
import remplr1CustomerJourney from "../../static/projectData/Remplr1-customer-journey.png";

const RemplrData = {
  projectName: "Currency Converter",
  backgroundColor: "#F2F4E7",
  description:
    " App build on popular Python framework: Flask built using API: exchangerate.host. To start, click on start button and the form will appear. Users will now enter the currency codes and then the amount, which also accepts decimal values. Any incorrect entry or empty entry will display the corresponding error message. Click on convert to display the result.",
  demoVideo: "https://www.youtube.com/embed/wR_DxD0ZGW4?si=DZQ2P8SUOQNgPX2j",
  liveLink: "https://currencyexchange.herokuapp.com/",
  role: "Full-stack Engineer",
  techStack: "Python, Flask, and JavaScript",
  timeline: "Febuary, 2023 - March, 2023",
  devFlow: {
    headings: [
      {
        heading: "Development >>>",
        steps: {
          step1: {
            header: "Setting Up the Application",
            text: "Import necessary modules and create an instance of the Flask application. Also, configure the secret key, debug settings, and initialize the DebugToolbar.",
          },
          "Step 2": {
            header: "Defining Routes",
            text: "Three routes are defined: a route for the homepage, a route to display the currency conversion form, and a route to handle the conversion post request.",
          },
          "Step 3": {
            header: "Homepage Route",
            text: "The homepage route returns the index.html template when accessed.",
          },
          "Step 4": {
            header: "Display Form Route",
            text: "The display form route returns the convert_form.html template which contains the currency conversion form.",
          },
          "Step 5": {
            header: "Calculate Result Route",
            text: "This route handles the conversion of currency. It takes the currency codes and amount from the form, validates them, makes a request to the exchangerate API, and returns the converted amount in the specified currency.",
          },
          "Step 6": {
            header: "Handling Errors",
            text: "In the calculate result route, appropriate error messages are displayed for invalid currency codes or amounts.",
          },
        },
      },

      {
        heading: "Testing >>>",
        steps: {
          "Step 1": {
            header: "Unit Testing",
            text: "Create tests to ensure that the application routes function as expected and handle errors appropriately.",
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
      header: "Handling Various Currency Formats",
      challenge:
        "Dealing with various international currency formats and symbols was a significant challenge as they have diverse standards and symbols that needed to be handled correctly to avoid confusion and errors in currency conversion.",
      solution:
        "Utilized the `ccy` library to handle various currency formats efficiently. It ensured the correct formatting and validation of different currency codes, providing a more robust and error-free currency conversion process.",
    },
    {
      header: "Error Handling for User Input",
      challenge:
        "Ensuring that the user input is valid and handling various types of errors (such as invalid currency codes or amounts) was a challenge to provide a smooth user experience and accurate conversion results.",
      solution:
        "Implemented comprehensive error checking for user inputs, including validation for currency codes and amounts. Used flash messages to inform users about any issues with their input, allowing them to easily correct errors and perform currency conversion without any hassle.",
    },
  ],
  learnings: [
    {
      header: "Efficient Error Handling for User Input",
      text: "Learned the importance of robust error handling for user inputs to enhance the usability of the application. Gained insights into utilizing flash messages for immediate user feedback, enabling them to correct their inputs efficiently, which ensures the accuracy of currency conversion.",
    },
    {
      header: "Integration and Usage of External API",
      text: "Acquired valuable experience in integrating and using external APIs for real-time data retrieval. Utilized the exchangerate.host API to fetch the latest currency conversion rates, ensuring the application provides up-to-date and accurate conversion results to the users.",
    },
  ],
};

export default RemplrData;
