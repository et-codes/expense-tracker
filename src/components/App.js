import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import Footer from './Footer';

const App = () => {
  const getExpenses = () => {
    const expensesJSON = localStorage.getItem('expenses');
    if (expensesJSON !== null) {
      return JSON.parse(expensesJSON);
    } else {
      return { expenseList: [], total: 0 };
    }
  };

  const [expenses, setExpenses] = useState(getExpenses());

  const storeExpenses = () => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };
  useEffect(storeExpenses, [expenses]);

  const addExpense = (expense) => {
    const updatedExpenses = expenses.expenseList.concat(expense);
    const updatedTotal = expenses.total + expense.amount;
    setExpenses({
      expenseList: updatedExpenses,
      total: updatedTotal
    });
  }

  const removeExpense = (id) => {
    const expenseToRemove = expenses.expenseList.find(expense => expense.id === id);
    const newExpenses = expenses.expenseList.filter(expense => expense.id !== id);
    const newTotal = expenses.total - expenseToRemove.amount;
    setExpenses({
      expenseList: newExpenses,
      total: newTotal
    });
  }

  return (
    <Container className="p-3">
      <Header total={expenses.total} />
      <ExpenseForm handleSubmit={addExpense} />
      <div className="mt-3">
        <ExpenseTable
          expenses={expenses.expenseList}
          handleRemove={removeExpense}
        />
      </div>
      <Footer />
    </Container>
  );
}

export default App;