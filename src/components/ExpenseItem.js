import React, { Component } from 'react';
import '../styles/table.css';

class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleRemove(this.props.expense.id);
  }

  render() {
    const { date, description, location, amount } = { ...this.props.expense };

    const dateString = new Date(date.replace(/-/g, '/')).toLocaleDateString();

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    const amountString = formatter.format(amount);

    return (
      <tr>
        <td className="text-center">{dateString}</td>
        <td className="text-truncate truncate d-none d-sm-block">{location}</td>
        <td className="text-truncate truncate">{description}</td>
        <td className="text-danger text-end">{amountString}</td>
        <td className="delete-column">
          <img
            src={require('../assets/remove.png')}
            alt="trash icon"
            onClick={this.handleClick}
          />
        </td>
      </tr >
    );
  }
}

export default ExpenseItem;