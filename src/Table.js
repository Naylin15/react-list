import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="table">
        <label>{this.props.name}</label>
        <label>{this.props.quantity}</label>
        <label>{this.props.price}</label>
        <button className="edit">E</button>
        <button className="delete">X</button>
      </div>
    );
  }
}

export default Table;
