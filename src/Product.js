import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <>
      <label>
          Product:
          <input 
            type="text" 
            name="nameProduct" 
            value={this.props.name}
            onChange={(e) => {this.props.changeProduct(
              this.props.id,
              {
                name: e.target.value
              }
            )}}
          />
      </label>
      <br/>
      <label>  
          Quantity:
          <input 
            type="text" 
            name="quantity"
            value={this.props.quantity}
            onChange={(e) => {this.props.changeProduct(
              this.props.id,
              {
                quantity: e.target.value
              }
            )}}
          />
      </label>
      <br/>
      <label>
          Price:
          <input 
            type="text" 
            name="price" 
            value={this.props.price}
            onChange={(e) => {this.props.changeProduct(
              this.props.id,
              {
                price: e.target.value
              }
            )}}
          />
      </label>
      </>
    );
  }
}

export default Product;
