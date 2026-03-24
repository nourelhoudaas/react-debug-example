import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [userName, setUserName] = useState(""); // state pour le nom
  return (
    <div>
      <h1>Bonjour, {userName}</h1>
      {/* On oublie de passer la prop name à Counter */}
      <Counter />
    </div>
  );
}

export default App;
