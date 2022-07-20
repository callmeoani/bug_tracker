import React, { useState } from "react";

const FormComponent = ({ setShowMoreDetails, bugName, setBugName }) => {
  const [newDataObject, setNewDataObject] = useState({
    id: 0,
    bugName: "",
    severity: "",
    status: "",
    description: "",
  });

  //Create states for the inputs
  const [severity, setSeverity] = useState("basic");
  const [selectedOption, setSelectedOption] = useState("unresolved");
  const [description, setDescription] = useState("");

  const handleSeverity = (e) => {
    setSeverity(() => e.target.value);
    // console.log(severity);
  };

  const handleStatus = (e) => {
    setSelectedOption(() => e.target.value);
    // console.log(status);
  };

  const handleDescription = (e) => {
    setDescription(() => e.target.value);
    console.log(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    setNewDataObject(() => ({
      bugName: bugName,
      severity: severity,
      status: selectedOption,
      description: description,
    }));

    console.log(newDataObject);

    alert("Bug successfully added!!!");
    setShowMoreDetails(false);
    setBugName("");
  };

  return (
    <form onSubmit={handleSubmit} className="main-form">
      <div>
        <label>
          Bug Name:
          <input name="bugName" type="text" value={bugName.bugName} readOnly />
        </label>

        <label>
          Severity:
          <select value={severity} onChange={handleSeverity}>
            <option value="basic">Basic</option>
            <option value="tough">Tough</option>
            <option value="injurious">Injurious</option>
            <option value="deadly">Deadly</option>
          </select>
        </label>

        <div value={selectedOption} onChange={handleStatus}>
          <label>
            Status:{" "}
            <div>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="unresolved"
                  checked={selectedOption === "unresolved"}
                  onChange={handleStatus}
                />
                Unresolved
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="resolving"
                  checked={selectedOption === "resolving"}
                  onChange={handleStatus}
                />
                Resolving
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="resolved"
                  checked={selectedOption === "resolved"}
                  onChange={handleStatus}
                />
                Resolved
              </label>
            </div>
          </label>
        </div>

        <div>
          <label>
            Description:{" "}
            <textarea
              type="text"
              name="description"
              onChange={handleDescription}
            />
          </label>
        </div>
        <input type="submit" value="Save" />
      </div>
    </form>
  );
};

export default FormComponent;
