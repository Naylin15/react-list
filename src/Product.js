import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <>
      <h2>Hello from Product</h2>
      <label>
          Description:
          <input type="text" name="nameProduct"/>
        <br/>
          Quantity:
          <input type="text" name="quantity"/>
        <br/>
          Price:
          <input type="text" name="price" />
      </label>
      </>
    );
  }
}

export default Product;
