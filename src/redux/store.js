import { configureStore } from "@reduxjs/toolkit";
import ratingsSlicer from "./ratingsSlicer";

export default configureStore({
  reducer: {
    ratings: ratingsSlicer,
  },
});
