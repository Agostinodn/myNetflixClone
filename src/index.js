import React from "react";
import { render } from "react-dom";
import "normalize.css";
import "./index.module.css";
import App from "./App";
import { firebase } from "./lib/Firebase.prod";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={firebase}>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
