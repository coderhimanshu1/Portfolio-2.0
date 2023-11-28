// Header.js
import profileImage from "../static/images/himanshu.jpg";
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
          <h1 className="name">Hey! I'm Himanshu Kumar</h1>
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
            I'm a Full Stack Engineer who enjoys making great software with
            user-centric approach. I always aim to be a supportive team member
            and inspire those around me. I'm passionate about learning new
            front-end and back-end technologies to create a real impact. To me,
            discovering new programming languages is not just fun, it's a way to
            make better software for people.
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
