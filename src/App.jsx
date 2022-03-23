import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as ROUTES from "./routes/ConstantsRoutes";
import { PrivateRoute, PublicRoute } from "./routes/PrivateRoutes";
import { Home, Signin, Signup, Browse } from "./pages";

export default function App() {
  const isLogged = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isLogged={isLogged} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>

        <Route element={<PublicRoute isLogged={isLogged} />}>
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
