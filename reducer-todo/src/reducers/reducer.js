import React, { useReducer } from "react";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: new Date()
    },

    {
      item: "Learn Redux",
      completed: false,
      id: new Date()
    }
  ],
  newTodo: ""
};

export const ADD_TODO = "ADD_TODO";
export const ON_CHANGE = "ON_CHANGE";
export const MARK_COMPLETE = "MARK_COMPLETE";

export default function reducer(state, action) {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: Date.now(),
          item: state.newTodo,
          completed: false
        }),
        item: ""
      };
    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    default:
      return state;
  }
}
