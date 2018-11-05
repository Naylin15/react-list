import React, { Component } from 'react';
import './App.css';
import Product from './Product';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    products: [],
    }
  }

  addProduct = (newP) => {

    this.setState({
      products: [
        ...this.state.products, newP
      ],
    })
    console.log(this.state.products); 
  }

  render() {
    return (
        <div className="main">
        <Product
          addNewProduct = {this.addProduct}
        />
        {
          this.state.products.map((product, index) => (
            <Table
              key={`product-${index}`}
              id={index}
              name={product.name}
              quantity={product.quantity}
              price={product.price}
            />
          ))
        }
        </div>
    );
  }
}

export default App;
