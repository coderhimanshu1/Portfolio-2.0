import React from "react";
import { useParams } from "react-router-dom";
import ProjectPage from "./projectPage";
import ProjectData from "./projectData";

const ProjectPageContainer = () => {
  const { projectKey } = useParams();
  const projectData = ProjectData[projectKey];

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return <ProjectPage projectData={projectData} />;
};

export default ProjectPageContainer;
