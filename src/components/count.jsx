import React, { useState } from "react";
import CounterButton from "./counterButton";
import "../styles/Counter.css"; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1); 

  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1> Counter App</h1>
      <h2 className="counter-value">{count}</h2>
      <div className="button-group">
        <CounterButton onClick={handleIncrement} color="#399f3c">
          Increment
        </CounterButton>
        <CounterButton onClick={handleDecrement} color="#f44336">
          Decrement
        </CounterButton>
        <CounterButton onClick={handleReset} color="#2196F3">
          Reset
        </CounterButton>
      </div>
    </div>
  );
};

export default Counter;
