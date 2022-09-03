import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ExpenseFormItem from './ExpenseFormItem';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        date: '',
        location: '',
        description: '',
        amount: ''
      },
      valid: true
    };
    this.addExpense = this.addExpense.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.validateExpense = this.validateExpense.bind(this);
  };

  changeDate(e) {
    this.setState({
      ...this.state,
      expense: { ...this.state.expense, date: e.target.value }
    });
  }

  changeLocation(e) {
    this.setState({
      ...this.state,
      expense: { ...this.state.expense, location: e.target.value }
    });
  }

  changeDescription(e) {
    this.setState({
      ...this.state,
      expense: { ...this.state.expense, description: e.target.value }
    });
  }

  changeAmount(e) {
    this.setState({
      ...this.state,
      expense: { ...this.state.expense, amount: e.target.value }
    });
  }

  addExpense(e) {
    e.preventDefault();
    const newExpense = this.validateExpense();
    if (newExpense) {
      this.props.handleSubmit(newExpense);
      this.setState({
        expense: {
          date: '',
          location: '',
          description: '',
          amount: ''
        },
        valid: true
      });
    } else {
      this.setState({ ...this.state, valid: false });
      console.log('failed validation');
    }
  }

  validateExpense() {
    const newAmount = Number(this.state.expense.amount);

    // The amount is the only field that can fail validation, if it cannot be converted to a #
    if (newAmount) {
      const newExpense = {
        id: Date.now(),
        date: this.state.expense.date,
        location: this.state.expense.location,
        description: this.state.expense.description,
        amount: newAmount
      }
      return newExpense;
    }
    return false;
  }

  render() {
    return (
      <Form className="border rounded bg-light p-3" onSubmit={this.addExpense}>
        <Row>
          <Col md={6}>
            <ExpenseFormItem
              label="Date"
              type="date"
              placeholder="When was the expense made?"
              handleChange={this.changeDate}
              value={this.state.expense.date}
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Location"
              type="text"
              placeholder="Where was the expense made?"
              handleChange={this.changeLocation}
              value={this.state.expense.location}
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Description"
              type="text"
              placeholder="What was the expense for?"
              handleChange={this.changeDescription}
              value={this.state.expense.description}
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Amount"
              type="currency"
              placeholder="What did it cost?"
              handleChange={this.changeAmount}
              value={this.state.expense.amount}
              valid={this.state.valid}
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