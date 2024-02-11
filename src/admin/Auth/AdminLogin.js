import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, resetState } from "../../api/auth/authSlice";
import { BsArrowRight } from "react-icons/bs";

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
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Login
              </h5>
              <form onSubmit={handleLogin}>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button
                  className="btn btn-primary btn-login text-uppercase fw-bold w-100 mb-3"
                  type="submit"
                >
                  Sign in
                </button>
                <div className="text-center mb-3">
                  <Link to="/forgot" className="text-forgot">
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <p className="mb-0">
                    <Link
                      to={redirect ? `/signup?redirect=${redirect}` : "/signup"}
                      className="text-decoration-none"
                    >
                      Create your Account <BsArrowRight size="20" />
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
