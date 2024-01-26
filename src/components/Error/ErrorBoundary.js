import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import "../../styles/ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Server:", error, errorInfo);
    this.setState({
      hasError: true,
      errorMessage: error.message || "An error occurred",
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <main
            className="fs-4 d-flex flex-wrap justify-content-center align-items-center w-100"
            style={{ height: "80vh" }}
          >
            <Row className="justify-content-center mt-5">
              <FaExclamationTriangle size={50} color="red" />
            </Row>
            <Row className="justify-content-center mt-3">
              <h4>{this.state.errorMessage}</h4>
            </Row>

            <div className="text-center py-5">
              <h1 className="display-1">404</h1>
              <h2>😔 Found Nothing Here</h2>
            </div>
            <Row className="justify-content-center mt-3">
              <Link to="/">
                <Button variant="primary">Return to Home</Button>
              </Link>
            </Row>
          </main>
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
