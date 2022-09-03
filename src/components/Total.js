import React, { Component } from 'react';

class Total extends Component {
  render() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    const total = formatter.format(this.props.amount);

    return <div>Total: <span className="text-danger">{total}</span></div>;
  }
}

export default Total;