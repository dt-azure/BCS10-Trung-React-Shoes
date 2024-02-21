import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    let { name, price, description, quantity } = this.props.data;

    return (
      <div className="details-field mt-3 text-left p-5 sticky-top">
        <h4>Name: {name}</h4>
        <p className="mt-3">
          Price: $
          {Intl.NumberFormat("en", {
            minimumFractionDigits: 2,
          }).format(price)}
        </p>
        <p>Description: {description}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.details,
  }
}


export default connect(mapStateToProps)(Details)
