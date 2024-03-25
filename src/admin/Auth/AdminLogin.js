import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { login, resetState } from "../../api/auth/authSlice";
import { BsArrowRight } from "react-icons/bs";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import "../../styles/auth.css";

function LoginPage() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(login({ email, password }))
      .then(() => {
        setRedirect(true);
        setTimeout(() => {
          dispatch(resetState());
        }, 3000);
      })
      .catch((error) => {
        setError("Incorrect email or password. Please try again.");
      });
  };

  if (redirect) return <Navigate to={"/admin"} />;

  return (
    <main className="main">
      <div className="cover-home3">
        <Container>
          <Row className="justify-content-center">
            <Col xl={10} lg={12}>
              <div className="text-center mt-50 pb-50">
                <h2 className="color-linear d-inline-block">Welcome back!</h2>
              </div>
              <div className="box-form-login pb-50">
                <div className="form-login bg-gray-850 border-gray-800 text-start">
                  <Form onSubmit={handleLogin}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-linear color-gray-850 hover-up"
                    >
                      Log me in
                    </Button>
                    <div className="form-group mb-0 mt-3">
                      <span>Don’t have an account?</span>{" "}
                      <Link
                        to={
                          redirect ? `/signup?redirect=${redirect}` : "/signup"
                        }
                        className="color-linear"
                      >
                        Sign Up <BsArrowRight size="20" />
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default LoginPage;
