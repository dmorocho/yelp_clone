import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload2);
      return state;
    },
    logOutUser: (state) => {
      return [];
    },
  },
});

export const selectUser = (state) => state.user;

export const { addUser, logOutUser } = usersSlice.actions;
export default usersSlice.reducer;
