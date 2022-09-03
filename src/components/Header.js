import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Total from './Total';

class Header extends Component {
  render() {
    return (
      <Row className="my-4">
        <Col className="h2">Expense Tracker</Col>
        <Col className="h2 d-flex align-items-center justify-content-end">
          <Total amount={this.props.total} />
        </Col>
      </Row>
    );
  }
}

export default Header;