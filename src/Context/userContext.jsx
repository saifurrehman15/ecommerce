import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, setDoc, doc, db, getDoc } from "../utils/firebase";

export const userInfo = createContext();

function UserContextProvider({ children }) {
  const [userData, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setUser({ isLogin: true, ...data });

        console.log("User found", userData);
      } else {
        setUser({ isLogin: false, email: "" });
        console.log("User not found");
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(userData);

  return (
    <userInfo.Provider value={{ userData, setUser }}>
      {children}
    </userInfo.Provider>
  );
}

export default UserContextProvider;
