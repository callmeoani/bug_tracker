import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/CakeActions";

const Rough2 = (props) => {
  return (
    <div>
      <h2>Number of cakes bought - {props.cakesBought} </h2>
      <h5>Number of cakes remaining - {props.availableCakes} </h5>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cakesBought: state.cakesBought,
    availableCakes: state.availableCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rough2);
