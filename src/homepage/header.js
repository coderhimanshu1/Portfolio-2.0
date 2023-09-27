// Header.js
import profileImage from "../static/images/himanshu.jpeg";
import flower from "../static/images/flower.png";
import React from "react";
import "../static/styles/homepage/techStack.css";
import Title from "../common/title";

const Header = ({ handleButtonClick }) => {
  return (
    <div className="Header">
      <Title />
      <div className="Header-components">
        <div className="Header-profile">
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
            Full Stack Engineer with a passion for delivering quality software.
            I strive to motivate individuals and showcase the qualities of a
            great teammate. I constantly seek to learn new technologies within
            the client user interface and backend programming. I have always
            considered learning new programming languages fun and exciting!
          </p>
          <div className="Home-bio-img">
            <img src={flower} alt="flower" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="Home-button" onClick={handleButtonClick}>
          Find more...
          <span className="arrow"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;