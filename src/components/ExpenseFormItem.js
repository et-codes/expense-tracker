import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class ExpenseFormItem extends Component {
  render() {
    const { label, type, placeholder, handleChange, value, valid } = { ...this.props };
    let contents;

    if (type === 'currency') {
      contents = (
        <InputGroup className="mb-3" hasValidation>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            step="any"
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            required
            isInvalid={!valid}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid number.
          </Form.Control.Feedback>
        </InputGroup>
      );
    } else {
      contents = (
        <Form.Control type={type} placeholder={placeholder} onChange={handleChange} value={value} />
      );
    }

    return (
      <Form.Group className="mb-3">
        <Form.Label className="d-none d-sm-block">{label}</Form.Label>
        {contents}
      </Form.Group>
    );
  }
}

export default ExpenseFormItem;