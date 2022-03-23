import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute({ isLogged }) {
  return isLogged ? <Navigate to="/browse" /> : <Outlet />;
}

export function PrivateRoute({ isLogged }) {
  return isLogged ? <Outlet /> : <Navigate to="/signin" />;
}
