import React, { useState } from "react";

function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Compteur pour {name}</h2>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <p>Valeur : {count}</p>
    </div>
  );
}

export default Counter;