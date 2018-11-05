import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <label>{this.props.quantity}</label>
        <label>{this.props.price}</label>
        <button>X</button>
      </div>
    );
  }
}

export default Table;
