// Header.js
import profileImage from "../static/images/himanshu.jpg";
// import flower from "../static/images/flower.png";
import React from "react";
import "../static/styles/homepage/techStack.css";
import Title from "../common/title";
// import Bubble from "./bubble";

const Header = ({ handleButtonClick }) => {
  // const [currentActivity, setCurrentActivity] = useState(
  //   "Reading about System designs and adding Next.js"
  // );

  return (
    <div className="Header section">
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
          <div className="Home-bio-heading">
            <p>About</p>
          </div>
          <div className="Home-bio-text">
            <p>
              As a passionate Full-stack software engineer with over three years
              of experience, I specialize in front-end technologies and
              full-stack development. My track record showcases the delivery of
              high-quality, scalable applications that consistently exceed
              client expectations. Before transitioning to Software Engineering;
              with over seven years in system administration, along with four
              years in leadership roles, I bring a wealth of knowledge and
              practical expertise to every project.
            </p>
            <hr />
            <h4>Professional Highlights</h4>
            <ul>
              <li>
                <strong>E-commerce Excellence:</strong> I developed a
                high-conversion e-commerce platform for EliteKitchenFinds,
                enhancing user experience and driving sales.
              </li>
              <li>
                <strong>AI Innovation:</strong> I led the development of an
                AI-driven workplace engagement application for Pathos,
                revolutionizing employee interaction and productivity.
              </li>
              <li>
                <strong>Tech Expertise:</strong> My technical skill set includes
                JavaScript, React, Next.js, Python, Flask, Node.js, Express, and
                PostgreSQL.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="Home-button" onClick={handleButtonClick}>
          Find more...
          <span className="services-arrow"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
