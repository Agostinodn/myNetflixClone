import React from "react";
import { Header } from "../components";
import * as ROUTES from "../routes/ConstantsRoutes";

export default function HeaderContainer({ children, ...restProp }) {
  return (
    <Header {...restProp}>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          alt="Netflix"
          src="./images/misc/logo.svg"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Login</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
