import { createSlice } from "@reduxjs/toolkit";

const ratingsSlice = createSlice({
    name: "todos",
    initialState: [
      { id: 1, feeling: 4, understanding: 4, support: 5, comments: 'Doing Great!'},
    ],
    reducers: {
  
      // recieves input from AddTodoForm and does logic and returns it into "initial state"(state)
      addTodo: (state, action) => {
        const newTodo = {
          id: Date.now(),
          title: action.payload.title,
          completed: false,
        };
        state.push(newTodo);
      },
      toggleComplete: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].completed = action.payload.completed;
      },
    },
  });

export default ratingsSlice.reducer;