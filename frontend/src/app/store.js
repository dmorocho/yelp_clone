import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import resturantReducer from "../features/resturants/resturantSlice";
import logger from "redux-logger";
export default configureStore({
  reducer: {
    resturants: resturantReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
