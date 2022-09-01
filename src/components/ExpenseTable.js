import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseItem from './ExpenseItem';

class ExpenseTable extends Component {
  render() {
    const expenses = [
      {
        date: '8/9/22',
        description: 'Groceries',
        location: 'Wal-Mart',
        amount: '$101.43'
      },
      {
        date: '8/12/22',
        description: 'Light bulbs',
        location: 'Lowe\'s',
        amount: '$12.65'
      },
      {
        date: '8/15/22',
        description: 'Booze',
        location: 'Gas station',
        amount: '$4520.63'
      }
    ];

    const expensesToDisplay = [];
    for (let i = 0; i < expenses.length; i++) {
      expensesToDisplay.push(<ExpenseItem key={i} expense={expenses[i]} />);
    }

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {[...expensesToDisplay]}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseTable;