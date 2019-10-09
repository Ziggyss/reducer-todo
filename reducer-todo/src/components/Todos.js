import React from "react";

export default function Todos(props) {
  const todosList = props.todos.todos.length ? (
    props.todos.todos.map(todo => {
      return (
        <div key={todo.id}>
          <span>{todo.item}</span>
        </div>
      );
    })
  ) : (
    <p>Your list is empty!</p>
  );
  return <div>{todosList}</div>;
}
