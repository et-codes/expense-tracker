import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class ExpenseFormItem extends Component {
  render() {
    const { label, type, placeholder } = { ...this.props };
    let contents;

    if (type === 'currency') {
      contents = (
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control placeholder={placeholder} />
        </InputGroup>
      );
    } else {
      contents = (
        <Form.Control type={type} placeholder={placeholder} />
      );
    }

    return (
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          {contents}
        </Form.Group>
      </Col>
    );
  }
}

export default ExpenseFormItem;