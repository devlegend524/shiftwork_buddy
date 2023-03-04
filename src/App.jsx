import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!user ? <Login /> : <Home />}
    </UserContext.Provider>
  );
}

export default App;
