import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa";
import Particle from "../Particle";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Server:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Container fluid className="resume-section">
            <Particle />
            <Row className="justify-content-center mt-5">
              <FaExclamationTriangle size={50} color="red" />
            </Row>
            <Row className="justify-content-center mt-3">
              <h4>An error occurred. Please try again later.</h4>
            </Row>
          </Container>
        </div>
      );
    }

    return (
      <div>
        <Container fluid className="resume-section">
          <Particle />

          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default ErrorBoundary;
