import React from "react";
import "./BugInfo.css";

const BugInfo = ({ bugToDisplay }) => {
  return (
    <div>
      <h5>Bug information</h5>
      <div>
        <p>
          <span className="parameterTitle">Bug Name: </span>{" "}
          {bugToDisplay.bugName}{" "}
        </p>
        <p>
          <span className="parameterTitle">Severity: </span>{" "}
          {bugToDisplay.severity}{" "}
        </p>
        <p>
          <span className="parameterTitle">Condition: </span>{" "}
          {bugToDisplay.condition}{" "}
        </p>
        <p>
          <span className="parameterTitle">Description: </span>{" "}
          {bugToDisplay.description}{" "}
        </p>
      </div>
    </div>
  );
};

export default BugInfo;
