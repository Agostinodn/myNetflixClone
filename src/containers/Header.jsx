import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/Routes";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          alt="Netflix"
          src="./images/misc/logo.svg"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sing In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
