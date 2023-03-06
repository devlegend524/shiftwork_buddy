import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import {
  auth,
  googleProvider,
  githubProvider,
  signInWithPopup,
  createUser,
} from "/firebase";

function Login() {
  const { setUser } = useContext(UserContext);

  function login(appProvider) {
    signInWithPopup(auth, appProvider).then((response) => {
      const userData = {
        name: response.user.displayName,
        image: response.user.photoURL,
        uid: response.user.uid,
      };
      setUser(userData);
      createUser(userData);
    });
  }

  const style = {
    loginContainer:
      "flex items-center justify-center h-screen lg:justify-evenly mx-5",
    innerContainer: "text-center",
    heading: "text-4xl font-semibold lg:min-w-[500px] lg:text-6xl",
    subHeading: "pt-3 lg:text-2xl",
    buttonImage: "mr-3 w-[30px]",
    googleButton:
      "text-white bg-primaryBlue hover:bg-accentBlue focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg font-semibold px-5 py-2.5 items-center inline-flex justify-center mb-2 w-full mt-10 lg:text-lg",
    githubButton:
      "text-white bg-primaryBlue hover:bg-accentBlue focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg font-semibold px-5 py-2.5 items-center inline-flex justify-center mb-2 w-full mt-3 lg:text-lg",
    loginArt: "hidden lg:block max-w-[800px]",
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.innerContainer}>
        <h1 className={style.heading}>Shiftwork Buddy</h1>
        <p className={style.subHeading}>Your tracking and income assistant.</p>

        <div>
          <button
            type='button'
            onClick={() => login(googleProvider)}
            className={style.googleButton}
          >
            <img
              src='/icons/google-icon.svg'
              alt='google icon'
              className={style.buttonImage}
            />
            <span>Login with Google</span>
          </button>

          <button
            type='button'
            onClick={() => login(githubProvider)}
            className={style.githubButton}
          >
            <img
              src='/icons/github-icon.svg'
              alt='google icon'
              className={style.buttonImage}
            />
            <span>Login with Github</span>
          </button>
        </div>
      </div>

      <div className={style.loginArt}>
        <img src='/login-art.svg' alt='login art' />
      </div>
    </div>
  );
}

export default Login;
