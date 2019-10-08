import React, { useReducer } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import reducer, {
  initialState,
  ADD_TODO,
  ON_CHANGE,
  MARK_COMPLETE,
} from "./reducers/reducer";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const onChangeInput = event => {
    dispatch({
      type: ON_CHANGE,
      payload: { [event.target.name]: event.target.value }
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO
    });
  };

  const onComplete = (id, complete) => event => {
    event.preventDefault();
    dispatch({
      type: MARK_COMPLETE,
      payload: { id, complete }
    });
  };
  return (
    <div className="App">
      <h1>React Todo List</h1>
      {todos.todos.length ? (
        todos.todos.map(todo => {
          return (
            <div key={todo.id}>
              <button onClick={onComplete(todo.id, true)}>
                Toggle Complete
              </button>
              <span>{todo.item}</span>
            </div>
          );
        })
      ) : (
        <p>Your list is empty!</p>
      )}
      <div>
        <h2>Add Todo</h2>
        <input
          type="text"
          onChange={onChangeInput}
          value={todos.newTodo}
          name="newTodo"
        ></input>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
