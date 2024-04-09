import React from "react";
import "../static/styles/about/about.css";
import profileImage from "../static/images/himanshu.jpg";
import Title from "../common/title";
import TimelineData from "./timelineData";
import Box from "./box";
import story from "../static/icons/story.png";

const AboutPage = () => {
  return (
    <>
      <div className="section about">
        <Title />
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
          <div className="about-text heading">
            <p>Hello, My Name is</p>
            <b>Himanshu Kumar</b>
            <hr />
            <p>Full Stack engineer</p>
          </div>
        </div>

        <div className="about-header">
          <Box
            header="About Me"
            text="Full Stack Engineer based in Vancouver who enjoys building
            beautiful software. I recently
            graduated from Springboard's Software Engineering (Full Stack)
            program. I have spent over 2 years on Frontend and 1+ year on Full-stack. Before the Software Engineering pivot, I spent 8 years
            working in leadership + System Admin roles in the IT industry."
            color={"#F9EFE3"}
          />
          <Box
            header="Recent Updates"
            text="Designed and developed eCommerce platform for a client using Next.js on Frontend and Sanity for headless CMS. Led the development of a high-conversion e-commerce platform at EliteKitchenFinds utilizing Next.js and TypeScript, while crafting dynamic, responsive interfaces with React and Chakra UI, significantly enhancing user engagement and accessibility."
            color="#E8E5CF"
          />
          <Box
            header="How it Sparked?"
            text="During my time working on Wordpress frontend for my food blog, I got interested in HTML, CSS, and JavaScript. That's where I found my passion for development and made a decision to switch my career and enroll in a 9-month intensive Full-stack software engineering boot camp at Springboard."
            color={"#F8FFF2"}
          />
        </div>
      </div>

      <div className="about-page">
        <div className="timeline-image">
          <img src={story} alt="story logo" />
        </div>
        <div className="timeline">
          {TimelineData.map((item, index) => (
            <Box
              header={item.date}
              text={item.event}
              color={item.color}
              image={item.image}
              icon={item.icon}
              projectLink={item.projectLink}
              linkText={item.linkText}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
