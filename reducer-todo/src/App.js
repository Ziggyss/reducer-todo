import React, { useReducer } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import reducer, {
  initialState,
  ADD_TODO,
  ON_CHANGE,
  MARK_COMPLETE,
  CLEAR_COMPLETE
} from "./reducers/reducer";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>React Todo List</h1>
      <Todos todos={todos} dispatch={dispatch} />
      <TodoForm ADD_TODO={ADD_TODO} dispatch={dispatch}/>
    </div>
  );
}

export default App;
