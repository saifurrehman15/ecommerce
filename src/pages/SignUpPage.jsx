import {
  auth,
  createUserWithEmailAndPassword,
  db,
  setDoc,
  doc,
} from "../utils/firebase";
import SignUpForm from "../components/SignUpForm";

const AppSignUp = () => {
  const createAccount = async (value) => {
    console.log(value.username);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      const user = userCredential.user;
      alert(user.uid);

      // Create user document in Firestore
      const docRef = doc(db, "users", user.uid);
      console.log(docRef);

      await setDoc(docRef, {
        users: value.username,
        email: user.email,
        uid: user.uid,
      });

      console.log("User successfully added to Firestore");
    } catch (error) {
      console.error("Error in account creation: ", error.message);
    }
  };

  return <SignUpForm accountRegister={createAccount} />;
};

export default AppSignUp;
