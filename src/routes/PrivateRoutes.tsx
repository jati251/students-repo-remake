import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Check if token exists in localStorage
  const token = localStorage.getItem("authToken");

  // If token exists, allow access to the route, otherwise redirect to login
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
