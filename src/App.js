import React, { Component } from 'react';
import './App.css';
import Product from './Product';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      selectProduct: {
        id: null,
        name: '',
        quantity: '',
        price: '',
      },
    }
  }

  deleteProduct = (id) => {
    const delProduct = [...this.state.products]
    delProduct.splice(id, 1)

    this.setState({
      products: delProduct,
    })
  }

  editProduct = (id) => {
    this.setState({
      selectProduct: { ...this.state.products[id], id},
    })
  }

  handleProduct = (product, id) => {
    let products = [...this.state.products]

    if (id || id === 0) {
      products[id] = product
    } else {
      products = [...products, {
        name: product.name,
        quantity: Number(product.quantity),
        price: Number(product.price),
      }] 
    }

    this.setState({ 
      products,
      selectProduct: {
        id: null,
        name: '',
        quantity: '',
        price: '',
      }
    })
  }

  render() {
    return (
        <div className="main">
        <Product
          selectProduct = {this.state.selectProduct}
          handleProduct = {this.handleProduct}
        />
        {
          this.state.products.map((product, index) => (
            <Table
              key={`product-${index}`}
              id={index}
              name={product.name}
              quantity={product.quantity}
              price={product.price}
              deleteProduct={this.deleteProduct}
              editProduct={this.editProduct}
            />
          ))
        }
        </div>
    );
  }
}

export default App;
