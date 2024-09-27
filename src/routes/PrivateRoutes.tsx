import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem("authToken");
  const location = useLocation();

  // Check if the path is empty or "/"
  if (location.pathname === "" || location.pathname === "/") {
    return <Navigate to="/dashboard" />;
  }

  // If the token exists, allow access to the route, otherwise redirect to login
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
