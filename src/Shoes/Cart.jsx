import React, { Component } from "react";
import { connect } from "react-redux";
import { changeAmountAction } from "./redux/action";

class Cart extends Component {
  render() {
    let itemCart = this.props.cart;

    return (
      <div className="mt-5">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {itemCart.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    $
                    {Intl.NumberFormat("en", {
                      minimumFractionDigits: 2,
                    }).format(item.price * item.amount)}
                  </td>
                  <td>
                    <div className="container d-flex justify-content-center">
                      <button
                        className="btn btn-dark mr-3 cart-btn"
                        onClick={() => {
                          this.props.handleChangeAmount(item.id, -1);
                        }}
                      >
                        -
                      </button>
                      {item.amount}
                      <button
                        className="btn btn-dark ml-3 cart-btn"
                        onClick={() => {
                          this.props.handleChangeAmount(item.id, 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="cart-img img-fluid"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.handleChangeAmount(item.id, 0);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAmount: (id, value) => {
      dispatch(changeAmountAction(id, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
