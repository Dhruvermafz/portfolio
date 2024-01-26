import React, { useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { FaUserShield } from "react-icons/fa";
import MessageSection from "../../components/common/MessageSection";
import Particle from "../../components/Particle";
import { login, resetState } from "../../api/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required!"),
  password: yup.string().required("Password is required"),
});

const AdminLogin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        dispatch(login(values));
        toast.success("🦄 Logging in..", {});
        await new Promise((resolve) => setTimeout(resolve, 300));
        dispatch(resetState());
        history.push("/admin");
      } catch (error) {
        toast.error("🚑 Something went wrong!", {});
        history.push("");
      }
    },
  });

  const authState = useSelector((state) => state);
  const { isLoading, isSuccess, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      toast.success("🦄 Login Successful!", {});
    } else if (message.message === "Rejected") {
      toast.error("You are not an admin", {});
    }
  }, [isSuccess, message]);

  return (
    <section className="vh-100 admin-login-bg">
      <Particle isLoading={isLoading} />
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xl={10}>
            <div className="card" style={{ borderRadius: "1rem" }}>
              <Row g-0>
                <Col md={6} lg={5} className="d-none d-md-block">
                  <img
                    src="https://images.pexels.com/photos/6894077/pexels-photo-6894077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </Col>
                <Col md={6} lg={7} className="d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Form onSubmit={formik.handleSubmit}>
                      <MessageSection
                        isSuccess={isSuccess}
                        isFail={formik.errors.email}
                      />
                      <div className="error text-center">
                        {formik.errors.email &&
                          formik.touched.email &&
                          formik.errors.email}
                      </div>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <FaUserShield className="fa-2x me-3 text-success" />
                        <span className="h1 fw-bold mb-0">
                          Admin Login Page
                        </span>
                      </div>

                      <Form.Group className="mb-4">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Form.Group>

                      <div className="pt-1 mb-4">
                        <Button
                          className={`btn mb-2 mb-md-0 btn-block w-100 ${
                            isLoading ? "disabled" : ""
                          }`}
                          type="submit"
                          style={{ backgroundColor: "#4DD637", color: "#fff" }}
                          disabled={isLoading}
                        >
                          {isLoading ? "Logging In..." : "Login"}
                        </Button>
                      </div>

                      <p className="fs-6 text-center fw-bold text-danger">
                        This Section is Designed only for Admin of This Website.
                        If You are not an admin, Please Go Back.
                      </p>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdminLogin;
