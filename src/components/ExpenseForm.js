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
      date: '',
      location: '',
      description: '',
      amount: ''
    }
    this.addExpense = this.addExpense.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
  };

  changeDate(e) {
    this.setState({ ...this.state, date: e.target.value });
  }

  changeLocation(e) {
    this.setState({ ...this.state, location: e.target.value });
  }

  changeDescription(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  changeAmount(e) {
    this.setState({ ...this.state, amount: e.target.value });
  }

  addExpense(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      date: '',
      location: '',
      description: '',
      amount: ''
    });
  }

  render() {
    return (
      <Form className="border rounded bg-light p-3" onSubmit={this.addExpense}>
        <Row>
          <Col md={6}>
            <ExpenseFormItem
              label="Date"
              type="date"
              handleChange={this.changeDate}
              value={this.state.date}
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Location"
              type="text"
              placeholder="Where did you buy it?"
              handleChange={this.changeLocation}
              value={this.state.location}
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Description"
              type="text"
              placeholder="What did you buy?"
              handleChange={this.changeDescription}
              value={this.state.description}
            />
          </Col>
          <Col md={6}>
            <ExpenseFormItem
              label="Amount"
              type="currency"
              placeholder="What did it cost?"
              handleChange={this.changeAmount}
              value={this.state.amount}
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