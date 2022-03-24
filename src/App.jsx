import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as ROUTES from "./routes/ConstantsRoutes";
import { PrivateRoute, PublicRoute } from "./routes/PrivateRoutes";
import { Home, Signin, Signup, Browse } from "./pages";
import { useAuthListener } from "./hooks";

export default function App() {
  // const { user } = { user: null };
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAnonymous={user.isAnonymous} />}>
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>

        <Route element={<PrivateRoute isAnonymous={user.isAnonymous} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
