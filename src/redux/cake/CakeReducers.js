// import { buyCake } from "./CakeActions";
import cakeTypes from "./CakeTypes";

const initialState = {
  availableCakes: 10,
  cakesBought: 0,
};

export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case cakeTypes.BUY_CAKE:
      return {
        ...state,
        availableCakes: state.availableCakes - 1,
        cakesBought: state.cakesBought + 1,
      };
    default:
      return state;
  }
};
