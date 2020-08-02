import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import locationReducer from "../features/searchbar/locationSlice";
import resturantReducer from "../features/resturants/resturantSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    resturants: resturantReducer,
    location: locationReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
