import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const searchBiz = (term) => async (dispatch) => {
  try {
    debugger;
    const res = await axios.get(
      "http://localhost:3001/api/businesses/search/",
      {
        search: term,
      }
    );
    dispatch(receiveAllBiz(res.data.payload));
  } catch (err) {
    throw Error(err.message);
  }
};

export const resturantSlice = createSlice({
  name: "resturants",
  initialState: [],
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

export const selectResturant = (state) => state.resturants;

export const { addResturant, receiveAllBiz } = resturantSlice.actions;
export default resturantSlice.reducer;
