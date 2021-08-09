import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 100)}>Click</button>
    </div>
  );
};

export default Counter;
