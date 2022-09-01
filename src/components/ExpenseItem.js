import React, { Component } from 'react';

class ExpenseItem extends Component {
  render() {
    const { date, description, location, amount } = { ...this.props.expense };

    return (
      <tr>
        <td>{date}</td>
        <td>{location}</td>
        <td>{description}</td>
        <td className="text-danger text-end">{amount}</td>
      </tr>
    );
  }
}

export default ExpenseItem;