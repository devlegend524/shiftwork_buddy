import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Shifts from "./pages/Shifts/Shifts";
import Account from "./pages/Account";

function App() {
  const [user, setUser] = useState();
  const [shifts, setShifts] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, shifts, setShifts }}>
      {!user ? (
        <Login />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shifts />} />
              <Route path='/account' element={<Account />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;
