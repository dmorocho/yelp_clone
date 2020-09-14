import { createSlice } from "@reduxjs/toolkit";

export const LocationSlice = createSlice({
  name: "location",
  initialState: {
    latitude: 0,
    longitude: 0,
  },
  updateLat: (state, action) => {
    state.latitude = action.payload;
    return state;
  },
  updateLong: (state, action) => {
    state.longitude = action.payload;
    return state;
  },
});

export const locationLongLat = (state) => state.currentItinerary;
export const { updateLong, updateLat } = LocationSlice.actions;
export default LocationSlice.reducer;
