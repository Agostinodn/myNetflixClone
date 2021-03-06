import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/ConstantsRoutes";
import { PrivateRoute, PublicRoute } from "./routes/PrivateRoutes";
import { Home, Login, Signup, Browse } from "./pages";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute user={user} />}>
          <Route path={ROUTES.SIGN_IN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>

        <Route element={<PrivateRoute user={user} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
