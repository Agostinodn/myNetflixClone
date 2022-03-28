import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute({ user }) {
  return user ? <Navigate to="/browse" /> : <Outlet />;
}

export function PrivateRoute({ user }) {
  return user ? <Outlet /> : <Navigate to="/signin" />;
}
