import React, { Component } from 'react';

class ExpenseItem extends Component {
  render() {
    const { date, description, location, amount } = { ...this.props.expense };
    const maxChars = this.props.maxChars;

    const dateString = new Date(date.replace('-', '/')).toLocaleDateString();
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    const amountString = formatter.format(amount);
    const locationString = location.length > maxChars
      ? location.slice(0, maxChars) + '...'
      : location;
    const descriptionString = description.length > maxChars
      ? description.slice(0, maxChars) + '...'
      : description;

    return (
      <tr>
        <td className="text-center">{dateString}</td>
        <td>{locationString}</td>
        <td>{descriptionString}</td>
        <td className="text-danger text-end">{amountString}</td>
      </tr >
    );
  }
}

export default ExpenseItem;