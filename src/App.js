import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      total: 0
    }
    this.addExpense = this.addExpense.bind(this);
  }

  addExpense(expense) {
    const updatedExpenses = [...this.state.expenses, expense];
    const updatedTotal = this.state.total + expense.amount;
    this.setState({
      expenses: updatedExpenses,
      total: updatedTotal
    });
  }

  render() {
    return (
      <Container className="p-3">
        <Header total={this.state.total} />
        <ExpenseForm handleSubmit={this.addExpense} />
        <div className="mt-3">
          <ExpenseTable expenses={this.state.expenses} />
        </div>
      </Container>
    );
  }
}

export default App;