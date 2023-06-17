import { useState } from 'react';

const Counter = () => {
  console.count("Counter just have rendered");
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>add One</button>

    </div>
  );
};

export default Counter;