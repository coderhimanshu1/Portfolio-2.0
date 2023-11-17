import React, { useEffect, useRef } from "react";
import ProjectHeader from "./projectHeader";
import List from "./list";
import Image from "./image";
import DevFlow from "./devFlow";
import Title from "../common/title";

import "../static/styles/project/projectPage.css";

const ProjectPage = ({ projectData }) => {
  const devProcessRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    devProcessRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const {
    projectName,
    backgroundColor,
    description,
    demoVideo,
    github,
    liveLink,
    API,
    role,
    techStack,
    timeline,
    architecture,
    dbSchema,
    customerJourney,
    componentStructure,
    devFlow,
    keyChallenges,
    learnings,
  } = projectData;

  return (
    <div className="ProjectPage">
      <ProjectHeader
        projectName={projectName}
        backgroundColor={backgroundColor}
        description={description}
        demoVideo={demoVideo}
        role={role}
        techStack={techStack}
        timeline={timeline}
        github={github}
        liveLink={liveLink}
        API={API}
        handleButtonClick={handleButtonClick}
        badge={projectData.badge}
      />

      <div ref={devProcessRef}>
        <Title titleText="Development Process" />

        {architecture && (
          <Image src={architecture} alt="Architecture" heading="Architecture" />
        )}

        {dbSchema && (
          <Image src={dbSchema} alt="Database" heading="Database Schema" />
        )}

        {customerJourney && (
          <Image
            src={customerJourney}
            alt="customer journey"
            heading="Customer Journey"
          />
        )}

        {componentStructure && (
          <Image
            src={componentStructure}
            alt="Component Design"
            heading="Component Design"
            className="small-image"
          />
        )}

        <DevFlow devFlow={devFlow} />
      </div>

      <Title titleText="Key Challenges" />

      {keyChallenges && (
        <div className="ProjectPage-list">
          <List items={keyChallenges} />
        </div>
      )}

      <Title titleText="What I have learned" />

      {learnings && (
        <div className="ProjectPage-list">
          <List items={learnings} />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
