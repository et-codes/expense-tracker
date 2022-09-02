import React, { Component } from 'react';

class ExpenseItem extends Component {
  render() {
    const { date, description, location, amount } = { ...this.props.expense };
    let maxChars = 56;

    const width = window.innerWidth;
    if (width < 1200) maxChars = 32;
    if (width < 992) maxChars = 24;
    if (width < 1400) maxChars = 48;
    if (width < 768) maxChars = 14;

    const dateString = new Date(date.replace('-', '/')).toLocaleDateString();
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    const amountString = formatter.format(amount);
    const locationString = location.length > 32
      ? location.slice(0, maxChars) + '...'
      : location;
    const descriptionString = description.length > 32
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