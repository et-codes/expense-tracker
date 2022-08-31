import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';

class App extends Component {
  render() {
    return (
      <Container className="p-3">
        <Header />
        <ExpenseForm />
        <ul>
          <li>Form</li>
          <li>- FormItem</li>
          <li>ExpenseTable</li>
          <li>- Expense</li>
          <li>Footer</li>
        </ul>
      </Container>
    );
  }
}

export default App;