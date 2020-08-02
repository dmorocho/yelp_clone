import { createSlice } from "@reduxjs/toolkit";

export const LocationSlice = createSlice({
  name: "location",
  initialState: {
    latitude: 0,
    longitude: 0,
  },
  updateLat: {
    reducer: (state, action) => {
      state.latitude = action.payload;
    },
  },
  updateLong: {
    reducer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const locationLongLat = (state) => state.currentItinerary;
export const { updateLong, updateLat } = LocationSlice.actions;
export default LocationSlice.reducer;
