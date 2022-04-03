import React, { useState, useContext } from "react";
import { FooterContainer, HeaderContainer } from "../containers";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../routes/ConstantsRoutes";

export default function Signin() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignIn = (event) => {
    event.preventDefault();
    //firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // browse
        navigate(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer style={{ height: "100vh" }}>
        <Form>
          <Form.Title>Login</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Login
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <Form.Link to="#">Learn more.</Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
