import SignInForm from "../components/SignInForm";
import { auth, signInWithEmailAndPassword } from "../utils/firebase";

const AppSignIn = () => {
  const getLoginVal = (value) => {
    console.log(value);

    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userlogin", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errprLogin", errorMessage);
      });
  };
  return <SignInForm getLoginVal={getLoginVal} />;
};
export default AppSignIn;
