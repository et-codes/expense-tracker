import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class ExpenseForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="What did you buy?" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Place purchased</Form.Label>
          <Form.Control type="text" placeholder="Where did you buy it?" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date purchased</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control placeholder="What did it cost?" />
          </InputGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default ExpenseForm;