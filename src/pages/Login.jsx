import { auth, provider, signInWithPopup } from "/firebase";

function Login({ setUser }) {
  function googleSignIn() {
    signInWithPopup(auth, provider).then((response) =>
      setUser({
        name: response.user.displayName,
        email: response.user.email,
        image: response.user.photoURL,
        uid: response.user.uid,
      })
    );
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <button onClick={() => googleSignIn()}>Login</button>
    </div>
  );
}

export default Login;
