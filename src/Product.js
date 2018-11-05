import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          name: '',
          quantity: 0,
          price: 0
        }
      ],
    // name: props.name,
    // quantity: props.quantity,
    // price: props.price
    }
  }

  changeField = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    
  }

  clickSubmit = (e) => {
    e.preventDefault();
    this.props.addNewProduct(this.state)
  }

  render() {
    return (
      <div className="product">
      <form className="product" onSubmit={this.clickSubmit}>
      <label>
          Product:
          <input 
            type="text" 
            name="name"
            onChange={this.changeField}
          />
      </label>
      <br/>
      <label>  
          Quantity:
          <input 
            type="text" 
            name="quantity"
            onChange={this.changeField}
          />
      </label>
      <br/>
      <label>
          Price:
          <input 
            type="text" 
            name="price" 
            onChange={this.changeField}
          />
      </label>
      <input 
        id="save"
        type="submit"
        value="Save"
      />
      </form>
      </div>
    );
  }
}


export default Product;
