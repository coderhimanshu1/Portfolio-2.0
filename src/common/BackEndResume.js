import { useEffect } from "react";
import "../static/styles/common/resume.css";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1lt0hhUbk5OCKxrbitMd_h6ASQRmcB1I1/view?usp=sharing";
  }, []);

  return (
    <div className="resume-container section typewriter">
      <h2>Getting Resume...</h2>
    </div>
  );
}

export default Resume;
