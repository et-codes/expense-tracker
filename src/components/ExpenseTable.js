import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseItem from './ExpenseItem';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  render() {
    const expenses = this.props.expenses;
    const expensesToDisplay = [];
    expenses.map(expense =>
      expensesToDisplay.push(
        <ExpenseItem key={expense.id} expense={expense} />
      )
    );

    return (
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th>Location</th>
            <th>Description</th>
            <th className="text-center" colSpan={2}>Amount</th>
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