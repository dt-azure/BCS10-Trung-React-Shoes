import React, { Component } from "react";
import { connect } from "react-redux";
import { DECREMENT, INCREASE, INCREMENT } from "./redux/constant";

class DemoRedux extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className="btn btn-dark mr-3" onClick={this.props.handleDecrement}>-</button>
        <strong>{this.props.number}</strong>
        <button className="btn btn-dark ml-3" onClick={this.props.handleIncrement}>+</button>
        <button className="btn btn-dark ml-3" onClick={this.props.handleIncrease}>++</button>

        <div className="mt-5">
        <input id="input" type="text" />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    number: state.value,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => {
      dispatch({
        type: INCREMENT,
      });
    },

    handleDecrement: () => {
        dispatch({
            type: DECREMENT,
        });
    },

    handleIncrease: () => {
        let input = document.getElementById('input').value * 1;

        dispatch({
            type: INCREASE,
            input
        })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
