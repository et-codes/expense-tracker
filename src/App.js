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
    this.removeExpense = this.removeExpense.bind(this);
  }

  addExpense(expense) {
    const updatedExpenses = [...this.state.expenses, expense];
    const updatedTotal = this.state.total + expense.amount;
    this.setState({
      expenses: updatedExpenses,
      total: updatedTotal
    });
  }

  removeExpense(id) {
    const expenseToRemove = this.state.expenses.find(expense => expense.id === id);
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id);
    const newTotal = this.state.total - expenseToRemove.amount;
    this.setState({
      expenses: newExpenses,
      total: newTotal
    });
  }

  render() {
    return (
      <Container className="p-3">
        <Header total={this.state.total} />
        <ExpenseForm handleSubmit={this.addExpense} />
        <div className="mt-3">
          <ExpenseTable
            expenses={this.state.expenses}
            handleRemove={this.removeExpense}
          />
        </div>
      </Container>
    );
  }
}

export default App;