import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [userName, setUserName] = useState("Nour"); // valeur définie

  return (
    <div>
      <h1>Bonjour, {userName}</h1>
      <Counter name={userName} /> {/* on passe la prop correctement */}
    </div>
  );
}

export default App;