import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Spinner, Alert, Container } from "react-bootstrap";
import Particle from "../../components/Particle";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { API_BASE_URL } from "../../config";

export default function AdminSignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>Your Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@company.com"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Your Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  className="w-100"
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="pl-2">Loading...</span>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>
              <div className="text-center mt-3">
                <span>Already have an account?</span>{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </div>
              {errorMessage && (
                <Alert variant="danger" className="mt-3">
                  {errorMessage}
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
