import React, { Component } from "react";
import List from "./List";
import Details from "./Details";
import Cart from "./Cart";
import { connect } from "react-redux";

export default class Shoes extends Component {
  render() {
    return (
      <div className="p-5 text-center">
        <h1>The Shoes Shop</h1>
        <div className="row">
          <div className="col-8">
            <List />
          </div>

          <div className="col-4">
            <Details />
          </div>

          <div className="col-12">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}


// export default connect(mapStateToProps)(Shoes);