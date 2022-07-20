import redux, { createStore } from "redux";

//DEFINE THE ACTION
//create the type
const BUY_CAKE = "BUY_CAKE";
//create action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "This is the act of buying cake.",
  };
};

//DEFINE THE REDUCER
//write out the initial state
const initialState = {
  availableCakes: 10,
};
//create the reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        availableCakes: state.availableCakes - 1,
      };

    default:
      return state;
  }
};

//DEFINE STORE
//create store
const store = createStore(cakeReducer);
//getState from store
// const intialStatePrint = store.getState()
console.log("initial state: ", store.getState());

//subscribe and unsubscribe to store
const unsubscribe = store.subscribe(() =>
  console.log("updated state: ", store.getState())
);

//dispatch actions to store
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

//unsubscribe to the store
unsubscribe();

const Rough = () => {
  return (
    <div>{/* <p>This is the initial state: {store.getState()}</p> */}</div>
  );
};

export default Rough;
