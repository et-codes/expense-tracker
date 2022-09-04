import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ExpenseFormItem from './ExpenseFormItem';

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    date: '',
    location: '',
    description: '',
    amount: ''
  });
  const [valid, setValid] = useState(true);

  const changeDate = (e) => {
    setExpense({ ...expense, date: e.target.value });
  }

  const changeLocation = (e) => {
    setExpense({ ...expense, location: e.target.value });
  }

  const changeDescription = (e) => {
    setExpense({ ...expense, description: e.target.value });
  }

  const changeAmount = (e) => {
    setExpense({ ...expense, amount: e.target.value });
  }

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = validateExpense();
    if (newExpense) {
      props.handleSubmit(newExpense);
      setExpense({
        date: '',
        location: '',
        description: '',
        amount: ''
      });
      setValid(true);
    } else {
      setValid(false);
    }
  }

  const validateExpense = () => {
    const newAmount = Number(expense.amount);

    if (newAmount) {
      const newExpense = {
        id: Date.now(),
        date: expense.date,
        location: expense.location,
        description: expense.description,
        amount: newAmount
      }
      return newExpense;
    }
    return false;
  }

  return (
    <Form className="border rounded bg-light p-3" onSubmit={addExpense}>
      <Row>
        <Col md={6}>
          <ExpenseFormItem
            label="Date"
            type="date"
            placeholder="When was the expense made?"
            handleChange={changeDate}
            value={expense.date}
          />
        </Col>
        <Col md={6}>
          <ExpenseFormItem
            label="Location"
            type="text"
            placeholder="Where was the expense made?"
            handleChange={changeLocation}
            value={expense.location}
          />
        </Col>
        <Col md={6}>
          <ExpenseFormItem
            label="Description"
            type="text"
            placeholder="What was the expense for?"
            handleChange={changeDescription}
            value={expense.description}
          />
        </Col>
        <Col md={6}>
          <ExpenseFormItem
            label="Amount"
            type="currency"
            placeholder="What did it cost?"
            handleChange={changeAmount}
            value={expense.amount}
            valid={valid}
          />
        </Col>
        <Col className="text-end">
          <Button type="submit" >Add Expense</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ExpenseForm;