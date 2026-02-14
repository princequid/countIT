import React from "react";

const CounterButton = ({ onClick, children, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "5px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: color || "#4CAF50",
        color: "white",
        transition: "0.3s",
      }}
      onMouseOver={(e) => (e.target.style.opacity = 0.8)}
      onMouseOut={(e) => (e.target.style.opacity = 1)}
    >
      {children}
    </button>
  );
};

export default CounterButton;
