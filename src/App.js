import "./static/styles/App.css";
import "./static/styles/desktop_styles.css";
import "./static/styles/tablet_styles.css";
import RouteContainer from "./routerContainer";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>

      <RouteContainer />
    </div>
  );
}

export default App;
