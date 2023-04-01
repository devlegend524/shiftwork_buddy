import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Shifts from "./pages/Shifts/Shifts";
import Greeting from "./pages/Shifts/Greeting";
import Rate from "./components/Rate";

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
              <Route path='/' element={<Greeting />} />
              <Route path='/shifts' element={<Shifts />} />
            </Routes>
            {!user.rate ? <Rate /> : null}
          </BrowserRouter>
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;
