// Header.js

import React from "react";
import "./static/styles/techStack.css";

const Header = ({ profileImage, flower, handleButtonClick }) => {
  return (
    <>
      <div>
        <h1 className="name">Hey! I'm Himanshu</h1>
        <div className="Home-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>

        <h2 className="role">
          Full Stack
          <br /> Software Engineer
        </h2>
      </div>
      <div className="Home-bio">
        <p>
          Full Stack Engineer with a passion for delivering quality software. I
          strive to motivate individuals and showcase the qualities of a great
          teammate. I constantly seek to learn new technologies within the
          client user interface and backend programming. I have always
          considered learning new programming languages fun and exciting!
        </p>
        <div className="Home-bio-img">
          <img src={flower} alt="flower" />
        </div>
      </div>
      <button className="Home-button" onClick={handleButtonClick}>
        Find more...
      </button>
    </>
  );
};

export default Header;
