import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {           
    addTodo: (state, action) => {
      const newTodo = {
        todo: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action) => {
      const { index, editedTodo } = action.payload;
      if (state.todos[index]) {
        state.todos[index].todo = editedTodo;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_,index) => index !== action.payload);
    },
  },
});

export const { addTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
