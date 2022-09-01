import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class ExpenseFormItem extends Component {
  render() {
    const { label, type, placeholder, handleChange } = { ...this.props };
    let contents;

    if (type === 'currency') {
      contents = (
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control placeholder={placeholder} onChange={handleChange} />
        </InputGroup>
      );
    } else {
      contents = (
        <Form.Control type={type} placeholder={placeholder} onChange={handleChange} />
      );
    }

    return (
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        {contents}
      </Form.Group>
    );
  }
}

export default ExpenseFormItem;