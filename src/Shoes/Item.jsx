// import React, { Component } from "react";
// import { connect } from "react-redux";

// class Item extends Component {
//   render() {
//     let { image, name, price } = this.props.data;

//     return (
//       <div className="col-4 mt-3">
//         <div className="card text-center">
//           <img className="card-img-top img-fluid mx-auto" src={image}/>
//           <div className="card-body">
//             <h4 className="card-title">{name}</h4>
//             <p className="card-text">
//                 ${price}
//             </p>
//             <button className="btn btn-dark mr-2" onClick={() => { this.props.handleClickView(this.props.data) }}>View</button>
//             <button className="btn btn-success" onClick={() => { this.props.handleAddToCart(this.props.data) }}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     handleClickView: () => {
//       dispatch({
//         type: 'CHANGE_DETAILS',
//         payload: this.props.data,
//       })
//     }
//   }
// }

// export default connect(null, mapDispatchToProps)(Item)
