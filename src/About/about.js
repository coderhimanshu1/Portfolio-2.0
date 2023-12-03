import React from "react";
import "../static/styles/about/about.css";
import profileImage from "../static/images/himanshu.jpg";
import Title from "../common/title";
import TimelineData from "./timelineData";

const AboutPage = () => {
  return (
    <>
      <Title />
      <div className="about-page">
        <div className="Home-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <h1>Hey, I'm Himanshu! </h1>
        <p>
          I'm a Full Stack Engineer based in Vancouver who enjoys building great
          software with a user-centric approach. I recently graduated from
          Springboard's Software Engineering (Full Stack) program. Before the
          Software Engineering pivot, I spent 7+ years working in leadership +
          System Admin roles in the IT industry and have a Bachelor of
          Technology Degree.
        </p>

        <p>
          During my time working on Wordpress frontend for my food blog, I got
          interested in HTML, CSS, and JavaScript. That's where I found my
          passion for development and made a decision to switch my career and
          enroll in a 9-month intensive Full-stack software engineering boot
          camp at Springboard, where I have worked with industry experts to work
          on my skills.
        </p>

        <p>
          My recent project was a full-stack web app where I built a node-based
          API and the front end was react. My tech stack includes Python,
          JavaScript, PostgreSQL, React, Flask, Node, Express, and more. In
          addition to my technical skills, I believe my strength lies in working
          on driving projects independently while collaborating with diverse
          teams. One of the interesting facts is that I love to cook.
        </p>
        <div className="timeline">
          <h3>My Story</h3>
          {TimelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
