import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

class App extends Component {
  render() {
    return (
      <Container className="p-3">
        <Header />
        <ExpenseForm />
        <div className="mt-3">
          <ExpenseTable />
        </div>
      </Container>
    );
  }
}

export default App;