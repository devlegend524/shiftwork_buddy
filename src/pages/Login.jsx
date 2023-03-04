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

  return (
    <div className='flex items-center justify-center h-screen lg:justify-evenly mx-5'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold lg:text-6xl'>Shiftwork Buddy</h1>
        <p className='pt-3 lg:text-lg'>Your tracking and income assistant.</p>

        <div className=''>
          <button
            type='button'
            onClick={() => login(googleProvider)}
            className='login-button mt-10'
          >
            <img
              src='/google-icon.svg'
              alt='google icon'
              className='mr-3 w-[30px]'
            />
            <span>Login with Google</span>
          </button>

          <button
            type='button'
            onClick={() => login(githubProvider)}
            className='login-button mt-3'
          >
            <img
              src='/github-icon.svg'
              alt='google icon'
              className='mr-3 w-[30px]'
            />
            <span>Login with Github</span>
          </button>
        </div>
      </div>

      <div className='hidden lg:block max-w-[800px] '>
        <img src='/login-art.svg' alt='login art' />
      </div>
    </div>
  );
}

export default Login;
