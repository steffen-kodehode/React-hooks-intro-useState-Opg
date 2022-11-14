import React, { useState } from "react";

function NumberCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Reduce by 1</button>
      <button onClick={() => setCount(count + 1)}>Increase by 1</button>
    </>
  );
}

export default NumberCounter;
