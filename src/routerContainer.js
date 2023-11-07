import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homepage/home";
import Navbar from "./common/navBar";
import ProjectPageContainer from "./project/projectPageContainer";
import AboutPage from "./About/about";
import Blog from "./Blog/blog";
import Footer from "./common/footer.js";

const RouteContainer = () => {
  const footerRef = useRef(null);

  const handleContactClick = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Router>
      <Navbar handleContactClick={handleContactClick} />
      <Routes>
        <Route path="/" element={<Home footerRef={footerRef} />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog username="coderhimanshu" />} />
        <Route
          path="/projects/:projectKey"
          element={<ProjectPageContainer />}
        />
      </Routes>

      <Footer footerRef={footerRef} />
    </Router>
  );
};

export default RouteContainer;
