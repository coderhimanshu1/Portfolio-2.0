import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homepage/home";
import Navbar from "./common/navBar";
import ProjectPageContainer from "./project/projectPageContainer";
import AboutPage from "./About/about";
import Blog from "./Blog/blog";
import Services from "./services/Services";
// import Maintenance from "./Maintenance/maintenance";
import Footer from "./common/footer";
import Work from "./homepage/work";
import Resume from "./common/Resume";

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
        <Route path="/projects" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog username="himanshu-dev" />} />
        {/* <Route path="/blog" element={<Maintenance />} /> */}
        <Route
          path="/projects/:projectKey"
          element={<ProjectPageContainer />}
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer footerRef={footerRef} />
    </Router>
  );
};

export default RouteContainer;
