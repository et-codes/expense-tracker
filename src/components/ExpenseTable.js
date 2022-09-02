import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseItem from './ExpenseItem';

class ExpenseTable extends Component {
  render() {
    const expenses = this.props.expenses;

    const expensesToDisplay = [];
    for (let i = 0; i < expenses.length; i++) {
      expensesToDisplay.push(<ExpenseItem key={i} expense={expenses[i]} />);
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