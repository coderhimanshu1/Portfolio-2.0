// Home.js
import React, { useRef } from "react";
import "../static/styles/homepage/home.css";
import Header from "./header";
import TechStack from "./techStack";
import Work from "./work";

const Home = ({ footerRef }) => {
  const techStackRef = useRef(null);

  const handleButtonClick = () => {
    techStackRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="Home">
      <Header handleButtonClick={handleButtonClick} />
      <TechStack techStackRef={techStackRef} />
      <Work />
    </div>
  );
};

export default Home;
