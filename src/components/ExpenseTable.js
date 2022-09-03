import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseItem from './ExpenseItem';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const expenses = this.props.expenses;

    let maxChars = 56;

    const width = this.state.width;
    if (width < 1400) maxChars = 48;
    if (width < 1200) maxChars = 32;
    if (width < 992) maxChars = 24;
    if (width < 768) maxChars = 14;

    const expensesToDisplay = [];
    for (let i = 0; i < expenses.length; i++) {
      expensesToDisplay.push(
        <ExpenseItem key={i} expense={expenses[i]} maxChars={maxChars} />
      );
    }

    return (
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th>Location</th>
            <th>Description</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expensesToDisplay}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseTable;