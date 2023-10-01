const Jeopardy = {
  projectName: "Jeopardy",
  backgroundColor: "#F2F4E7",
  description:
    "Jeopardy quiz show replica based on Javascript and DOM manipulation. The game utilized fundamentals of Object oriented programming and populate the game board by get request from Joepardy API. The questions are hidden at start. Once player start playing and select category, the first click displays the question and second click reveals the answer.",
  demoVideo: "https://www.youtube.com/embed/YSdi5E9yQ_I?si=zsG0sVRkxNpNA4gn",
  liveLink: "https://jeopardy-game1.surge.sh/",
  role: "Frontend Engineer",
  techStack: "JavaScript",
  timeline: "December, 2023 - December, 2023",
  devFlow: {
    headings: [
      {
        heading: "Development >>>",
        steps: {
          step1: {
            header: "Setting Up Constants and Variables",
            text: "Defined base URL for API and initialized an empty array for categories to store the data related to each category including title and clues.",
          },
          step2: {
            header: "Fetching Category IDs",
            text: "Created a `getCategoryIds` function to asynchronously fetch category IDs from the API and selected 6 random IDs from the response.",
          },
          step3: {
            header: "Fetching Category Data",
            text: "Developed a `getCategory` function to get the title and clues for each category by ID from the API. Mapped the response data to a structured object with a title and clues.",
          },
          step4: {
            header: "Populating the HTML Table",
            text: "Created a `fillTable` function to fill the Jeopardy table with category titles in the table header and placeholders for questions in the table body.",
          },
          step5: {
            header: "Handling Cell Clicks",
            text: "Developed a `handleClick` function to handle click events on table cells, showing the question on the first click, the answer on the second click, and ignoring further clicks.",
          },
          step6: {
            header: "Showing Loading View",
            text: "Implemented `showLoadingView` function to clear the Jeopardy table and display a loading spinner while fetching data from the API.",
          },
          step7: {
            header: "Hiding Loading View",
            text: "Constructed a `hideLoadingView` function to remove the loading spinner after the data fetching and table population are complete.",
          },
          step8: {
            header: "Starting the Game",
            text: "Built a `setupAndStart` function to initiate the game setup by calling the aforementioned functions in sequence to ensure the game board is properly set up and populated with categories and clues.",
          },
          step: {
            header: "Event Handling",
            text: "Added event handlers to start the game on a button click and handle cell clicks for revealing questions and answers in the Jeopardy game.",
          },
        },
      },

      {
        heading: "Deployment >>>",
        steps: [
          {
            header: "Installing Surge",
            text: "Installed Surge by running the command 'npm install -g surge' in the terminal. This command globally installed Surge, allowing for the deployment of projects to the web.",
          },
          {
            header: "Navigating to Project Directory",
            text: "Navigated to the project directory in the terminal. This directory contains all the files and folders needed for the website or project to run correctly.",
          },
          {
            header: "Running the Surge Command",
            text: "Ran the 'surge' command in the terminal within the project directory. This command initiated the deployment process.",
          },
          {
            header: "Providing Domain Information",
            text: "Provided a domain for the project when prompted. This could be a custom domain or a subdomain on surge.sh. Pressed enter to allow Surge to assign a random subdomain.",
          },
          {
            header: "Deployment",
            text: "Allowed Surge to deploy the project. During this process, Surge uploaded the project files to the specified domain, making the project accessible on the web.",
          },
          {
            header: "Viewing the Deployed Project",
            text: "Visited the provided or chosen domain in a web browser to view the deployed project. The project is now live and accessible to anyone with the URL.",
          },
          {
            header: "Updating the Project",
            text: "Made changes to the project locally and then reran the 'surge' command in the project directory to redeploy the updated project to the same URL.",
          },
        ],
      },
    ],
  },
  keyChallenges: [
    {
      header: "Asynchronous Data Fetching",
      challenge:
        "Handling asynchronous calls and ensuring that the data is loaded before proceeding was a major challenge. It was crucial to ensure that category IDs and details are fetched and processed in order before populating them into the Jeopardy table.",
      solution:
        "Utilized `async/await` syntax to manage asynchronous API calls, ensuring that the data is fully loaded before moving on to the next step of processing. This method ensured that the data is available when needed, eliminating potential errors or undefined data issues.",
    },
    {
      header: "Managing Click Events and Data Display",
      challenge:
        "Managing the click events to display questions and answers while ensuring the data is presented in the correct format and sequence posed a challenge.",
      solution:
        "Implemented the `handleClick` function to manage the click events, ensuring that the questions and answers are displayed in sequence and further clicks are ignored once the answer is shown. This approach maintains the game's flow and ensures a smooth user experience.",
    },
  ],
  learnings: [
    {
      header: "Asynchronous Programming in JavaScript",
      text: "Learned the significance and application of asynchronous programming in JavaScript using `async/await` syntax. It's crucial for handling API requests to ensure data is available before processing, providing a seamless data fetching and processing experience.",
    },
    {
      header: "Event Handling and Data Management",
      text: "Gained insights into effective event handling and data management in JavaScript. Enhanced understanding of managing click events and data display, ensuring the correct sequence and format for presenting questions and answers in the Jeopardy game, contributing to a smooth and interactive user experience.",
    },
  ],
};

export default Jeopardy;
