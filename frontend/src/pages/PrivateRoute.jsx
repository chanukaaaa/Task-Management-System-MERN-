// src/pages/PrivateRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
