import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Shifts from "./pages/Shifts/Shifts";
import Greeting from "./components/Greeting";

function App() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localUser);
  const [shifts, setShifts] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, shifts, setShifts }}>
      {!user || !localUser ? (
        <Login />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Greeting />} />
              <Route path='/shifts' element={<Shifts />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;
