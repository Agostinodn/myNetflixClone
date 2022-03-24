import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute({ isAnonymous }) {
  return isAnonymous ? <Outlet /> : <Navigate to="/browse" />;
}

export function PrivateRoute({ isAnonymous }) {
  return isAnonymous ? <Navigate to="/signin" /> : <Outlet />;
}
