import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ExpenseFormItem from './ExpenseFormItem';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] };
    this.addExpense = this.addExpense.bind(this);
  }

  addExpense(e) {
    console.log('Expense submitted');
    e.preventDefault();
  }

  render() {
    return (
      <Form className="border rounded bg-light p-3" onSubmit={this.addExpense}>
        <Row>
          <Col md={6}>
            <ExpenseFormItem
              label="Date"
              type="date"
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Location"
              type="text"
              placeholder="Where did you buy it?"
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Description"
              type="text"
              placeholder="What did you buy?"
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Amount"
              type="currency"
              placeholder="What did it cost?"
            />
          </Col>
          <Col className="text-end">
            <Button type="submit" >Add Expense</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default ExpenseForm;