import React, { useState } from "react";

const CounterButton = ({ onClick, children, color }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        padding: "10px 20px",
        margin: "5px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: color || "#4CAF50",
        color: "white",
        transition: "all 0.2s ease-in-out",
        transform: isPressed ? "scale(0.95)" : "scale(1)",
        boxShadow: isPressed 
          ? `0 2px 5px rgba(0, 0, 0, 0.3)` 
          : `0 4px 8px rgba(0, 0, 0, 0.2)`,
      }}
      onMouseOver={(e) => {
        if (!isPressed) {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }
      }}
      onMouseOut={(e) => {
        if (!isPressed) {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }
      }}
    >
      {children}
    </button>
  );
};

export default CounterButton;
