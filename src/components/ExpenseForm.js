import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ExpenseFormItem from './ExpenseFormItem';

class ExpenseForm extends Component {
  render() {
    return (
      <Form className="border rounded bg-light p-3">
        <Row>
          <ExpenseFormItem
            label="Description"
            type="text"
            placeholder="What did you spend?"
          />
          <ExpenseFormItem
            label="Place purchased"
            type="text"
            placeholder="Where did you spend it?"
          />
          <ExpenseFormItem
            label="Date purchased"
            type="date"
          />
          <ExpenseFormItem
            label="Expense amount"
            type="currency"
            placeholder="What did it cost?"
          />
        </Row>
        <Col className="text-center">
          <Button type="submit">Add Expense</Button>
        </Col>
      </Form>
    );
  }
}

export default ExpenseForm;