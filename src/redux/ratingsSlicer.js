import { createSlice } from "@reduxjs/toolkit";

const ratingsSlice = createSlice({
  name: "todos",
  initialState: {
    id: 1,
    feeling: 4,
    understanding: 4,
    support: 5,
    comments: "Doing Great!",
  },

  reducers: {
    feelingRating: (state, action) => {
      state.feeling = action.payload;
    },
    understandingRating: (state, action) => {
      state.understanding = action.payload;
    },
    supportRating: (state, action) => {
      state.support = action.payload;
    },
    // commentsRating: (state, action) => {
    //   state.feeling = action.payload;
    // },
  },
});

export default ratingsSlice.reducer;
