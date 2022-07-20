import { createStore } from "redux";
import { CakeReducer } from "./cake/CakeReducers";

const store = createStore(CakeReducer);

export default store;
