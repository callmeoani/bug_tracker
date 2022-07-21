import { useState } from "react";
import "./App.css";
import ExistingBugs from "./components/existing-bugs/ExistingBugs";
import FormComponent from "./components/form-input/FormComponent";
// import Rough from "./components/rough";
// import Rough2 from "./components/Rough2";

function App() {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const [bugName, setBugName] = useState("");

  const handleContinueClick = () => {
    bugName.length <= 3
      ? alert("Name is too short!!! Must be at least 4 characters long")
      : setShowMoreDetails(true);
  };

  const handleNewBugInput = (event) => {
    setBugName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a simple bug tracker app.</h1>
        <div>
          {!showMoreDetails && (
            <label>
              Enter a new bug:{" "}
              <input
                type="text"
                name="title"
                onChange={handleNewBugInput}
                value={bugName}
              />{" "}
              <button onClick={handleContinueClick}>Continue</button>
            </label>
          )}

          <div>
            {showMoreDetails && (
              <FormComponent
                setShowMoreDetails={setShowMoreDetails}
                bugName={bugName}
                setBugName={setBugName}
              />
            )}
          </div>
        </div>

        {showMoreDetails && (
          <button
            onClick={() => {
              setShowMoreDetails(false);
              setBugName("");
            }}
          >
            Cancel
          </button>
        )}

        <div>
          <ExistingBugs showMoreDetails={showMoreDetails} />
        </div>
      </header>
    </div>
  );
}

export default App;
