import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./constants/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
