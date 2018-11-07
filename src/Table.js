import React, { Component } from 'react';
import { GoPencil } from 'react-icons/go';
import {GoTrashcan} from 'react-icons/go';

class Table extends Component {
  render() {
    return (
      <div className="table">
        <label>{this.props.name}</label>
        <label>{this.props.quantity}</label>
        <label>{this.props.price}</label>
        <button 
          className="edit" 
          onClick={() => this.props.editProduct(this.props.id)}
        >
          <GoPencil />
        </button>
        <button 
          className="delete" 
          onClick={() => this.props.deleteProduct(this.props.id)}
        > 
          <GoTrashcan />
        </button>
      </div>
    );
  }
}

export default Table;
