// Home.js
import React, { useRef } from "react";
import "./static/styles/home.css";
import profileImage from "./static/images/himanshu.jpeg";
import flower from "./static/images/flower.png";
import Header from "./header";
import TechStack from "./techStack";
import Work from "./work";

const Home = () => {
  const techStackRef = useRef(null);

  const handleButtonClick = () => {
    techStackRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="Home">
      <Header
        profileImage={profileImage}
        flower={flower}
        handleButtonClick={handleButtonClick}
      />
      <TechStack techStackRef={techStackRef} />
      <Work />
    </div>
  );
};

export default Home;
