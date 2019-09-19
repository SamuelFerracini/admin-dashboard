import React, { Component } from "react";
import { Col, Row, Table } from "reactstrap";

export default class Button extends Component {
  render() {
    return (
      <Row className="justify-content-center">
        <Col className="col-lg-5 col-md-4 col-sm-4">
          <button type={this.props.type}>{this.props.label}</button>
        </Col>
      </Row>
    );
  }
}
