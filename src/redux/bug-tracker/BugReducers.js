import bugActionTypes from "./BugActionTypes";

const initialState = {
  id: 0,
  bugName: "",
  severity: "",
  status: "",
  description: "",
};

export const addBugReducer = (state = initialState, action) => {
  switch (action.type) {
    case bugActionTypes.ADD_BUG:
      return {
        ...state,
      };
    default:
      return state;
  }
};
