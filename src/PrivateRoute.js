import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "./App";

const PrivateRoute = ({ element, ...rest }) => {
  const { userInfo } = useContext(UserContext);

  return userInfo ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
