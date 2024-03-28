const CurrencyConverter = {
  projectName: "Currency Converter",
  backgroundColor: "#F2F4E7",
  description:
    " App build on popular Python framework: Flask built using API: exchangerate.host. To start, click on start button and the form will appear. Users will now enter the currency codes and then the amount, which also accepts decimal values. Any incorrect entry or empty entry will display the corresponding error message. Click on convert to display the result.",
  demoVideo: "https://www.youtube.com/embed/wR_DxD0ZGW4?si=DZQ2P8SUOQNgPX2j",
  liveLink: "https://currency-converter-ukgv.onrender.com/",
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
            header: "Creating a Heroku Account",
            text: "Signed up for a Heroku account at https://www.heroku.com/. Completed the registration process to set up a new account or logged in if an account already existed.",
          },
          {
            header: "Installing the Heroku CLI",
            text: "Downloaded and installed the Heroku Command Line Interface (CLI), which is used to manage and scale the applications and view application logs.",
          },
          {
            header: "Linking Your Git Repository",
            text: "Initialized a Git repository in the project directory and linked the Git repository to Heroku, allowing Heroku to automatically deploy the project whenever changes were pushed to the repository.",
          },
          {
            header: "Creating a Heroku App",
            text: "Used the 'heroku create' command to create a new application on Heroku. The output included the URL of the deployed application.",
          },
          {
            header: "Setting Environment Variables",
            text: "Added any necessary environment variables in the Heroku Dashboard or using the 'heroku config:set' command. This was particularly useful for sensitive information or configuration values that should not be hard-coded in the project.",
          },
          {
            header: "Configuring Automatic Deployments",
            text: "Enabled automatic deployments in the Heroku Dashboard to ensure that Heroku automatically updated the web service whenever changes were pushed to the linked Git repository. This kept the project current and up-to-date.",
          },
          {
            header: "Deploying Your Project",
            text: "Pushed changes to the linked Git repository. Heroku detected the changes and automatically deployed the project based on the Procfile or the specified build settings. Monitored the deployment process through the Heroku Dashboard.",
          },
          {
            header: "Accessing Your Deployed Project",
            text: "After the deployment process was complete, accessed the live project by visiting the provided URL in the output of the 'heroku create' command or in the Heroku Dashboard. The application was now accessible to users on the internet.",
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

export default CurrencyConverter;
