import React, { Component } from 'react';
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.selectProduct.name,
      quantity: props.selectProduct.quantity,
      price: props.selectProduct.price
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectProduct.id !== this.props.selectProduct.id) {
      this.setState({
        name: this.props.selectProduct.name,
        quantity: this.props.selectProduct.quantity,
        price: this.props.selectProduct.price
      })
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
    if (this.state.name !== '' && this.state.quantity !== '' && this.state.price !== '') {
      const { id } = this.props.selectProduct;
      if (id || id === 0) {
        this.props.handleProduct(this.state, id);
      } else {
        this.props.handleProduct(this.state);
      }
    } else {
      alert("Error, there are empty fields");
    }
  }

  render() {
    return (
        <div className="product">
          <form className="form-group" onSubmit={this.clickSubmit}>
            <label className="form-label">
              Product:
            </label>
            <input
                className="form-input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeField}
                required
              />
            <br/>
            <label className="form-label">  
              Quantity:
              <input 
                className="form-input"
                type="number" 
                name="quantity"
                value={this.state.quantity}
                onChange={this.changeField}
                required
              />
            </label>
            <br/>
            <label className="form-label">
              Price:
              <input
                className="form-input"
                type="number" 
                name="price"
                value={this.state.price}
                onChange={this.changeField}
                required
              />
            </label>
            <br/>
            <input
              className="form-input"
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
