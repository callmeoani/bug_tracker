import { createStore } from "redux";
// import { CakeReducer } from "./cake/CakeReducers";
import { addBugReducer } from "./bug-tracker/BugReducers";

const store = createStore(addBugReducer);

export default store;
