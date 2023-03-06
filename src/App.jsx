import { useState } from "react";
import { UserContext } from "./context/UserContext";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!user ? <Login /> : <Home />}
    </UserContext.Provider>
  );
}

export default App;
