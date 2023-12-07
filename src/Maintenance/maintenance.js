import "../static/styles/common/maintenance.css";

import React from "react";

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <h1>Under Maintenance</h1>
      <p>
        Sorry for the inconvenience. Im working on getting this back up and
        running at the moment. You can always read my blogs directly on »{" "}
        <a
          href="https://medium.com/@himanshu-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
        .
      </p>
      <p>We'll be back up shortly!</p>
    </div>
  );
};

export default Maintenance;
