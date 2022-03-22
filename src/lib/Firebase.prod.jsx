import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBtJvOmduJUwmGEmAVi4NkxpxZafMZUYPE",
  authDomain: "netflix-83b6e.firebaseapp.com",
  projectId: "netflix-83b6e",
  storageBucket: "netflix-83b6e.appspot.com",
  messagingSenderId: "642548267604",
  appId: "1:642548267604:web:ea679a0f80281332610bc1",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
