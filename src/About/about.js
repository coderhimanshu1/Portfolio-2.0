import React from "react";
import "../static/styles/about/about.css";
import profileImage from "../static/images/himanshu.jpeg";
import Title from "../common/title";
import Footer from "../common/footer";
import TimelineData from "./timelineData";

const AboutPage = () => {
  return (
    <>
      <Title />
      <div className="about-page">
        <div className="Home-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>

        <h1>Hi, I'm Himanshu Kumar. </h1>

        <p>
          I'm a full-stack software engineer with over six years of experience
          in IT infrastructure projects including four years of leadership
          experience.
        </p>
        <p>
          During my time working on my food blog where I was working on
          designing the WordPress templates, I got interested in HTML, CSS, and
          JavaScript. That's where I found my passion for development and made a
          decision to switch my career and enroll in a 9-month intensive
          Full-stack software engineering boot camp at Springboard, where I have
          worked with industry experts to work on my skills.
        </p>

        <p>
          I have been actively involved in code reviews and building
          database-driven applications based on Python and Flask. I have spent
          two years with Frontend development and a year with Full stack
          development. My recent project was a full-stack web app where I built
          a node-based API and the front end was react. My tech stack includes
          Python, JavaScript, PostgreSQL, React, Flask, Node, Express, and more.
          In addition to my technical skills, I believe my strength lies in
          working on driving projects independently while collaborating with
          diverse teams. One of the interesting facts is that I love to cook.
        </p>

        <div className="timeline">
          <h3>My Story</h3>
          {TimelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              {item.date && <div className="timeline-date">{item.date}</div>}
              <div className="timeline-content">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
