import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import resturantReducer from "../features/resturants/resturantSlice";
import logger from "redux-logger";
export default configureStore({
  reducer: {
    counter: counterReducer,
    resturants: resturantReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
