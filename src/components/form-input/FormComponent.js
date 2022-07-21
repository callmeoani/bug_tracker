import React, { useState } from "react";
import { connect } from "react-redux";
import { addBug } from "../../redux/bug-tracker/BugActionCreators";

// import BugReducers from "../../redux/bug-tracker/BugReducers";

const FormComponent = ({
  setShowMoreDetails,
  bugName,
  setBugName,
  addNewBug,
}) => {
  const [newDataObject, setNewDataObject] = useState({});

  // console.log(newDataObject);

  //Create states for the inputs
  const [severity, setSeverity] = useState("basic");
  const [status, setStatus] = useState("unresolved");
  const [description, setDescription] = useState("");

  const handleSeverity = (e) => {
    setSeverity(() => e.target.value);
    // console.log(severity);
  };

  const handleStatus = (e) => {
    setStatus(() => e.target.value);
    // console.log(status);
  };

  const handleDescription = (e) => {
    setDescription(() => e.target.value);
    console.log(description);
  };

  // const newData = [
  //   bugName,
  //   severity,
  //   status,
  //   description,
  //   // newDataObject,
  // ];

  let newDataValues = {};
  newDataValues = {
    id: 0,
    bugName: bugName,
    severity: severity,
    status: status,
    description: description,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    // console.log(newData);

    console.log(newDataObject);

    alert("Bug successfully added!!!");

    setNewDataObject((newDataObject) => ({
      ...newDataObject,
      ...newDataValues,
    }));

    // addBug()

    setShowMoreDetails(false);
    setBugName("");
    return newDataObject;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="main-form">
        <div>
          <label>
            Bug Name:
            <input name="bugName" type="text" value={bugName} readOnly />
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

          <div value={status} onChange={handleStatus}>
            <label>
              Status:{" "}
              <div>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="unresolved"
                    checked={status === "unresolved"}
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
                    checked={status === "resolving"}
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
                    checked={status === "resolved"}
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
      {/* <BugReducers initialState={newDataObject} /> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewBug: () => dispatch(addBug()),
  };
};

export default connect(null, mapDispatchToProps)(FormComponent);
