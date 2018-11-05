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
    }
  }

  changeField = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    })
    
  }

  render() {
    return (
      <div className="product">
      <form className="product">
      <label>
          Product:
          <input 
            type="text" 
            name="nameProduct" 
            // value={this.props.name}
            onChange={this.changeField
            //   (e) => {this.props.changeProduct(
            //   this.props.id,
            //   {
            //     name: e.target.value
            //   }
            // )}
            }
          />
      </label>
      <br/>
      <label>  
          Quantity:
          <input 
            type="text" 
            name="quantity"
            // value={this.props.quantity}
            onChange={this.changeField
              
            //   (e) => {this.props.changeProduct(
            //   this.props.id,
            //   {
            //     quantity: e.target.value
            //   }
            // )}
            }
          />
      </label>
      <br/>
      <label>
          Price:
          <input 
            type="text" 
            name="price" 
            // value={this.props.price}
            onChange={this.changeField
            //   (e) => {this.props.changeProduct(
            //   this.props.id,
            //   {
            //     price: e.target.value
            //   }
            // )}
            }
          />
      </label>
      <input type="submit" value="+" />
      </form>
      </div>
    );
  }
}

export default Product;
