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
    let newProduct = <Product />
    this.setState({
      products: [
        ...this.state.products, newProduct
      ],
    })
    console.log(this.state.products); 
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
          <>
          {this.state.products}
          </>
          {/* <Product/>
          <Table /> */}
        </header>
      </div>
    );
  }
}

export default App;
