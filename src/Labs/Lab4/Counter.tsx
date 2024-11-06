import React, { useState } from "react";
export default function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          fontSize: "16px",
          color: "white",
          backgroundColor: "#28a745", // Green color
          border: "none",
          padding: "10px 20px",
          margin: "5px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        id="wd-counter-up-click">
        Up
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
            fontSize: "16px",
            color: "white",
            backgroundColor: "#dc3545", // Red color
            border: "none",
            padding: "10px 20px",
            margin: "5px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        id="wd-counter-down-click">
        Down
      </button>
<hr/></div>);}

