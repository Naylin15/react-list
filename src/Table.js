import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="table">
        <label>{this.props.name}</label>
        <label>{this.props.quantity}</label>
        <label>{this.props.price}</label>
        <button 
          className="edit" 
          onClick={() => this.props.editProduct(
              this.props.id,
            )}>E</button>
        <button className="delete" onClick={() => this.props.deleteProduct(this.props.id)}>X</button>
      </div>
    );
  }
}

export default Table;
