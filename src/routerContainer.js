import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homepage/home";
import Navbar from "./common/navBar";
import ProjectPageContainer from "./project/projectPageContainer";
import AboutPage from "./About/about";

const RouteContainer = () => {
  const workRef = useRef(null);
  const footerRef = useRef(null);

  const handleWorkClick = () => {
    workRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactClick = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Router>
      <Navbar
        handleWorkClick={handleWorkClick}
        handleContactClick={handleContactClick}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home workRef={workRef} footerRef={footerRef} />}
        />
        <Route path="/work/:projectKey" element={<ProjectPageContainer />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default RouteContainer;
