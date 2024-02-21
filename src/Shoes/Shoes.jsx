import React, { Component } from "react";
import List from "./List";
import Details from "./Details";
import Cart from "./Cart";
import { connect } from "react-redux";

export default class Shoes extends Component {
  // renderItems = () => {
  //   return this.state.shoesArr.map((item) => (
  //     <Item name={item.name} imgSrc={item.image} price={item.price} />
  //   ));
  // };

  // handleChangeDetails = (item) => { 
  //   this.setState({
  //       details: item,
  //   })
  //  };

  // handleAddToCart = (item) => {
  //   let newCart = [...this.state.cart]

  //   let index = newCart.findIndex((n) => {
  //     return n.id == item.id
  //   })

  //   if (index == -1) {
  //     let newItem = { ...item, amount: 1 }
  //     newCart.push(newItem)
  //   }
  //   else {
  //     newCart[index].amount++
  //   }

  //   this.setState({
  //     cart: newCart,
  //   });
    
  //  };

  // handleChangeAmount = (id, k) => { 
  //   let newCart = [...this.state.cart]
  //   let index = newCart.findIndex((item) => {
  //     return item.id == id
  //   })

  //   if (k == 0) {
  //     newCart[index].amount = 0;
  //   }
  //   else {
  //     newCart[index].amount += k;
  //   }

  //   if (newCart[index].amount == 0) {
  //     newCart.splice(index,1)
  //   }
    
  //   this.setState({
  //     cart: newCart,
  //   });

  //  };


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