import { configureStore } from "@reduxjs/toolkit";
import ratingsSlice from "./ratingsSlice";

export default configureStore({
  reducer: {
    ratings: ratingsSlice,
  },
});
