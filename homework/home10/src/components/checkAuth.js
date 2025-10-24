import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function checkAuth(Component) {
  return function ProtectedComponent(props) {
    const user = useSelector((state) => state.auth.user);
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return <Component {...props} />;
  };
}

export default checkAuth;
