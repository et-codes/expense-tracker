import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      total: 0
    }
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.getExpenses = this.getExpenses.bind(this);
    this.storeExpenses = this.storeExpenses.bind(this);
  }

  componentDidMount() {
    this.getExpenses();
  }

  getExpenses() {
    const expensesJSON = localStorage.getItem('expenses');
    if (expensesJSON !== null) {
      this.setState(JSON.parse(expensesJSON));
    }
  }

  storeExpenses() {
    localStorage.setItem('expenses', JSON.stringify(this.state));
  }

  addExpense(expense) {
    const updatedExpenses = [...this.state.expenses, expense];
    const updatedTotal = this.state.total + expense.amount;
    this.setState({
      expenses: updatedExpenses,
      total: updatedTotal
    }, () => this.storeExpenses());
  }

  removeExpense(id) {
    const expenseToRemove = this.state.expenses.find(expense => expense.id === id);
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id);
    const newTotal = this.state.total - expenseToRemove.amount;
    this.setState({
      expenses: newExpenses,
      total: newTotal
    }, () => this.storeExpenses());
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
        <Footer />
      </Container>
    );
  }
}

export default App;