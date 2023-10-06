import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homepage/home";
import Navbar from "./common/navBar";
import ProjectPageContainer from "./project/projectPageContainer";
import AboutPage from "./About/about";
import Blog from "./Blog/blog";
import Footer from "./common/footer.js";

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
          path="/"
          element={<Home workRef={workRef} footerRef={footerRef} />}
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog username="coderhimanshu" />} />
        <Route path="/:projectKey" element={<ProjectPageContainer />} />
      </Routes>

      <Footer footerRef={footerRef} />
    </Router>
  );
};

export default RouteContainer;
