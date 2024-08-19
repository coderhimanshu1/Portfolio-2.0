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
            Front-end/ Full Stack
            <br /> Software Engineer
          </h2>
        </div>

        <div className="Home-bio">
          <div className="Home-bio-heading">
            <p>About</p>
          </div>
          <div className="Home-bio-text">
            <p>
              As a Front-end/ Full Stack Software Engineer, my goal is to
              leverage my experience in front-end technologies and full-stack
              development to create meaningful, impactful applications that
              enhance user experiences and drive business success. With a proven
              track record in e-commerce, API integration, and scalable web
              applications, I am dedicated to delivering innovative solutions
              that meet diverse client needs. I am passionate about continuous
              learning and adapting to the ever-evolving tech landscape,
              ensuring that every project I undertake is not only technically
              sound but also aligned with the strategic goals of the
              organization.
            </p>
            {/* <hr /> */}
            {/* <h4>Professional Highlights</h4>
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
            </ul> */}
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
