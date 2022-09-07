import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ExpenseFormItem from './ExpenseFormItem';

const ExpenseForm = ({ handleSubmit }) => {
  const [expense, setExpense] = useState({
    date: '',
    location: '',
    description: '',
    amount: ''
  });

  const changeDate = (event) => {
    setExpense({ ...expense, date: event.target.value });
  }

  const changeLocation = (event) => {
    setExpense({ ...expense, location: event.target.value });
  }

  const changeDescription = (event) => {
    setExpense({ ...expense, description: event.target.value });
  }

  const changeAmount = (event) => {
    setExpense({ ...expense, amount: event.target.value });
  }

  const addExpense = (event) => {
    event.preventDefault();
    const newExpense = createExpenseObject();
    if (newExpense) {
      handleSubmit(newExpense);
      setExpense({
        date: '',
        location: '',
        description: '',
        amount: ''
      });
    }
  }

  const createExpenseObject = () => {
    const newAmount = Number(expense.amount);
    const newExpense = {
      id: Date.now(),
      date: expense.date,
      location: expense.location,
      description: expense.description,
      amount: newAmount
    };
    return newExpense;
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