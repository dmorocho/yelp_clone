import { createSlice } from "./node_modules/@reduxjs/toolkit";
import axios from "./node_modules/axios";

export const resturantSlice = createSlice({
  name: "resturants",
  initialState: ["hi"],
  reducers: {
    addResturant: {
      reducer: (state, action) => {
        state.unshift(action.payload);
      },
      prepare: (resturant) => ({ payload: { title: resturant } }),
    },
    receiveAllBiz: (state, action) => action.payload,
    // receiveA: (state, action) => {
    //     action.payload;
    //   }
  },
});

export const fetchAllBiz = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(receiveAllBiz(res.data));
  } catch (err) {
    throw Error(err.message);
  }
};
export const selectResturant = (state) => state.resturants;

export const { addResturant, receiveAllBiz } = resturantSlice.actions;
export default resturantSlice.reducer;
