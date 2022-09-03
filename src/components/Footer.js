import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

class Footer extends Component {
  render() {
    return (
      <Row>
        <a
          href="https://github.com/et-codes/expense-tracker"
          className="text-muted text-center mt-3"
        >
          et-codes
        </a>
      </Row>
    )
  }
}

export default Footer;