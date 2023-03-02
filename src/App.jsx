import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState();

  return (
    <div>
      <Login setUser={setUser} />
    </div>
  );
}

export default App;
