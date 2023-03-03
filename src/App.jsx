import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState();

  return !user ? (
    <div>
      <Login setUser={setUser} />
    </div>
  ) : (
    <div>
      <Home />
    </div>
  );
}

export default App;
