import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    return (
      <div className='container mt-3 text-center'>
        <div className="row">
            {this.props.shoesArr.map((item) => {
              return (
                <div className="col-4 mt-3" key={item.id}>
                <div className="card text-center">
                  <img className="card-img-top img-fluid mx-auto" src={item.image}/>
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">
                        ${item.price}
                    </p>
                    <button className="btn btn-dark mr-2" onClick={() => { this.props.handleClickView(item) }}>View</button>
                    <button className="btn btn-success" onClick={() => { this.props.handleAddToCart(item) }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              )
            })}
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    shoesArr: state.shoesArr,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (item) => {
      dispatch({
        type: 'CHANGE_DETAILS',
        item,
      })
    },

    handleAddToCart: (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        item,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
