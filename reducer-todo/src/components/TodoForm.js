import React from "react";
import reducer from "../reducers/reducer";

export default function TodoForm({ value, ADD_TODO, dispatch }) {
  return (
    <div>
      <h2>Add Todo</h2>
      <input type="text"></input>
      <button onClick={event => dispatch({ type: ADD_TODO })}>Submit</button>
    </div>
  );
}
