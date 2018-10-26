import React, { Component } from 'react';
import './App.css';
import Product from './Product';
// import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    products: [],
    }
  }

  addProduct = () => {
    this.setState({
      products: [
        ...this.state.products, { name: "", quantity: 0, price: 0 }
      ],
    })
    console.log(this.state.products); 
  }

  changeProduct = (id, newValue) => {
    const newtProducts = [...this.state.products]
    newtProducts[id] = {...newtProducts[id], ...newValue}

    this.setState({
      products: newtProducts,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button 
            type="button" 
            onClick={this.addProduct}>
              +
          </button>
          {
            this.state.products.map((product, index) => (
              <Product
                key={`product-${index}`}
                id={index}
                name={product.name}
                quantity={product.quantity}
                price={product.price}
                changeProduct={this.changeProduct}
              />
            ))
          }
        </header>
      </div>
    );
  }
}

export default App;
