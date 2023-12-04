import React from "react";
import "../static/styles/about/about.css";
import profileImage from "../static/images/himanshu.jpg";
import Title from "../common/title";
import TimelineData from "./timelineData";
import Box from "./box";
import pathosBadge from "../static/icons/Pathos-small.PNG";
import story from "../static/icons/story.png";

const AboutPage = () => {
  return (
    <>
      <Title />
      <div className="about-page">
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
        <div className="about-text">
          <p>Hello, My Name is</p>
          <b>Himanshu Kumar</b>
          <hr />
          <p>Full Stack engineer</p>
        </div>
        <Box
          header="About Me"
          text="I'm a Full Stack Engineer based in Vancouver who enjoys building great
          software with a user-centric approach. I recently graduated from
          Springboard's Software Engineering (Full Stack) program. Before the
          Software Engineering pivot, I spent 7+ years working in leadership +
          System Admin roles in the IT industry and have a Bachelor of
          Technology Degree."
          color={"#F9EFE3"}
        />
        <Box
          header="Recent Updates"
          text="Won Springboard Hackathon: Proposed original idea to build AI-powered platform aiming to boost empathy and emotional intelligence in remote workplace environments."
          color="#E8E5CF"
          icon={pathosBadge}
        />
        <Box
          header="How it Sparked?"
          text="During my time working on Wordpress frontend for my food blog, I got interested in HTML, CSS, and JavaScript. That's where I found my passion for development and made a decision to switch my career and enroll in a 9-month intensive Full-stack software engineering boot camp at Springboard."
          color={"#F8FFF2"}
        />
        <div className="timeline-image">
          <img src={story} alt="story logo" />
        </div>
        <div className="timeline">
          {TimelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <Box
                header={item.date}
                text={item.event}
                color={item.color}
                image={item.image}
                icon={item.icon}
                projectLink={item.projectLink}
                linkText={item.linkText}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
