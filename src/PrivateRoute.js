import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { userInfo } = useContext(UserContext);

  return (
    <Route
      {...rest}
      element={userInfo ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
