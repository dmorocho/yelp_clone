import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import locationReducer from "../features/searchbar/locationSlice";
import resturantReducer from "../features/resturants/resturantSlice";
import userReducer from "../features/UserSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    resturants: resturantReducer,
    location: locationReducer,
    userSlice: userReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
