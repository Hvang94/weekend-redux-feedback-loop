import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  feeling: null,
  understanding: null,
  support: null,
  comments: null,
}];

const ratingsSlice = createSlice({
  name: "ratings",
  initialState,

  reducers: {
    feelingRating: (state, action) => {
      return { ...state, feeling: action.payload };
    },
    understandingRating: (state, action) => {
      return { ...state, understanding: action.payload };
    },
    supportRating: (state, action) => {
      return { ...state, support: action.payload };
    },
    commentsRating: (state, action) => {
      return { ...state, comments: action.payload };
    },
    clearState: (state) => {
      return initialState;
    },
  },
});

export const {
  feelingRating,
  understandingRating,
  supportRating,
  commentsRating,
  clearState,
} = ratingsSlice.actions;

export default ratingsSlice.reducer;
