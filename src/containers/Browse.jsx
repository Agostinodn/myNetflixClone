import React, { useState, useContext, useEffect } from "react";
import { ProfilesContainer } from "./index";
import { FirebaseContext } from "../context/firebase";

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <ProfilesContainer user={user} setProfile={setProfile} />;
}
