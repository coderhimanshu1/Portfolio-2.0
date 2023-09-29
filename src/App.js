import "./static/styles/App.css";
import "./static/styles/desktop_styles.css";
import "./static/styles/tablet_styles.css";
import RouteContainer from "./routerContainer";

// Import the polyfill at the top of your file
import smoothscroll from "smoothscroll-polyfill";

// Apply the polyfill
smoothscroll.polyfill();

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>

      <RouteContainer />
    </div>
  );
}

export default App;
