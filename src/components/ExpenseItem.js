import React, { Component } from 'react';
import '../styles/ExpenseItem.css';

class ExpenseItem extends Component {
  render() {
    const { date, description, location, amount } = { ...this.props.expense };

    const dateString = new Date(date.replace('-', '/')).toLocaleDateString();

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    const amountString = formatter.format(amount);

    return (
      <tr>
        <td className="text-center">{dateString}</td>
        <td className="text-truncate truncate">{location}</td>
        <td className="text-truncate truncate">{description}</td>
        <td className="text-danger text-end">{amountString}</td>
      </tr >
    );
  }
}

export default ExpenseItem;