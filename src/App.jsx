import { useState } from "react";
import { UserContext } from "./context/UserContext";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Shifts from "./pages/Shifts/Shifts";

function App() {
  const [user, setUser] = useState();
  const [shifts, setShifts] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, shifts, setShifts }}>
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Shifts />
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;
