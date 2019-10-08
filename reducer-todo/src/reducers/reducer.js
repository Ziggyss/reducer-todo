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
  newTodo: "",
};

export const ADD_TODO = "ADD_TODO";
export const ON_CHANGE = "ON_CHANGE";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const CLEAR_COMPLETE = "CLEAR_COMPLETE";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      debugger;
      return {
        ...state,
        todos: 
        state.todos.concat ( {
            id: Date.now(),
            item: state.item,
            completed: false
          }) 
      };
    case MARK_COMPLETE:
      return state;
    case CLEAR_COMPLETE:
      return state;
    default:
      return state;
  }
}
