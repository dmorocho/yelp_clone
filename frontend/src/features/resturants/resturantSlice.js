import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiURL } from "../../util/apiURL";

export const searchBiz = (term) => async (dispatch) => {
  const API = apiURL();

  try {
    let res = await axios.get(`${API}/api/businesses`);
    dispatch(receiveAllBiz(res.data.payload));
  } catch (error) {}
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
