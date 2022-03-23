import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((elements) => {
        const allContent = elements.docs.map((element) => ({
          ...element.data(),
          docId: element.id,
        }));

        setContent(allContent);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return { [target]: content };
}
