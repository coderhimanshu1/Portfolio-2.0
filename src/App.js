import "./static/styles/App.css";
import RouteContainer from "./routerContainer";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <header className="App-header">
        <RouteContainer />
      </header>
    </div>
  );
}

export default App;
