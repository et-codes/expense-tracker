import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Total from './Total';

class Header extends Component {
  render() {
    const total = 123;
    return (
      <Row className="my-4">
        <Col md={8} className="h2">Expense Tracker</Col>
        <Col md={4} className="h2 d-flex align-items-center justify-content-end">
          <Total amount={total} />
        </Col>
      </Row>
    );
  }
}

export default Header;