// Header.js
import profileImage from "../static/images/himanshu.jpg";
import flower from "../static/images/flower.png";
import React from "react";
import "../static/styles/homepage/techStack.css";
import Title from "../common/title";
// import Bubble from "./bubble";

const Header = ({ handleButtonClick }) => {
  // const [currentActivity, setCurrentActivity] = useState(
  //   "Reading about System designs and adding Next.js"
  // );

  return (
    <div className="Header">
      <Title titleText="About"/>
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
            I'm a Full Stack Engineer based in Vancouver who enjoys building
            beautiful software with a user-centric approach. I recently
            graduated from Springboard's Software Engineering (Full Stack)
            program. I have spent over 2 years on Frontend and 1+ year working on Full-stack development. Before the Software Engineering pivot, I spent 7+ years
            working in leadership + System Admin roles in the IT industry and
            have a Bachelor of Technology Degree.
          </p>

          <div className="Home-bio-img">
            <img src={flower} alt="flower" />
          </div>
          {/* <Bubble text={currentActivity} /> */}
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
