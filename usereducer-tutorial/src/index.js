import React, { useReducer } from "react";
import ReactDOM from "react-dom";
// import App from './App';

function Count() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "-":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      {count}
      <button onClick={() => dispatch("add")}>Increment</button>
      <button onClick={() => dispatch("-")}>Decrement</button>
    </div>
  );
}

ReactDOM.render(<Count />, document.getElementById("root"));
