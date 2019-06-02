import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";
// import App from './App';

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];

      case "remove":
        return state.filter((_, index) => index != action.index);

      case "clear":
        return [];

      case "prioritize":
        return state.filter((item, index) => index === action.index);

      default:
        return state;
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    
    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>

      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
            <button onClick={() => dispatch({ type: "prioritize", index })}>
              Prioritize
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
