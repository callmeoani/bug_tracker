import React, { useState } from "react";

import "./ExistingBugs.css";

import Data from "../data";
import BugInfo from "../bug-info/BugInfo";

const ExistingBugs = ({ showMoreDetails }) => {
  const [showBugInfo, setShowBugInfo] = useState(false);
  const [bugToDisplay, setBugToDisplay] = useState([]);

  const handleBugNameClick = (id) => {
    const theBug = Data.filter((item) => item.id === id);

    setBugToDisplay(theBug);
    setShowBugInfo(true);
  };

  return (
    <div>
      {!showMoreDetails && (
        <div className="container">
          <div className="allBugs-container">
            <h4>All Bugs</h4>
            <ul>
              {Data.map((datum) => {
                return (
                  <li
                    onClick={() => handleBugNameClick(datum.id)}
                    key={datum.id}
                  >
                    {datum.bugName}
                  </li>
                );
              })}
            </ul>
          </div>
          {showBugInfo && (
            <div className="bugInfo-container">
              {bugToDisplay.map((bug) => (
                <div key={bug.id}>
                  <BugInfo bugToDisplay={bug} />
                </div>
              ))}
              <button onClick={() => setShowBugInfo(false)}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExistingBugs;
