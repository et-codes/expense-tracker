import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseItem from './ExpenseItem';
import '../styles/table.css';

class ExpenseTable extends Component {
  render() {
    const expenses = this.props.expenses;
    const expensesToDisplay = [];
    expenses.map(expense =>
      expensesToDisplay.push(
        <ExpenseItem key={expense.id} expense={expense} handleRemove={this.props.handleRemove} />
      )
    );

    return (
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th className="d-none d-sm-block truncate">Location</th>
            <th className="truncate">Description</th>
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