import React, { Component } from 'react';

class ExpenseItem extends Component {
  render() {
    const { date, description, location, amount } = { ...this.props.expense };
    const dateString = new Date(date).toLocaleDateString();

    return (
      <tr>
        <td className="text-center">{dateString}</td>
        <td>{location}</td>
        <td>{description}</td>
        <td className="text-danger text-end">${amount}</td>
      </tr>
    );
  }
}

export default ExpenseItem;