import React, { useState } from 'react';
import './counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  // incrementing the counter
  const increment = () => {
    setCount(count + 1);
  };

  // decrementing the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
        <h1 className="counter-title">Counter App</h1>
        <p className="counter-count">Count: {count}</p>
        <button className="counter-button" onClick={increment}> Increment</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>    
  </div>
  );
}

export default Counter;
