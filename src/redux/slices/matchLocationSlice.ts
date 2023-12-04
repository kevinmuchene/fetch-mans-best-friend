import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface Location {
  zip_code: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  county: string;
}

interface MatchLocationState {
  locationData: Location[];
}

const initialState: MatchLocationState = {
  locationData: [],
};

export const matchLocationSlice = createSlice({
  name: "matchLocation",
  initialState,
  reducers: {
    setMatchLocationData: (state, action: PayloadAction<Location[]>) => {
      state.locationData = action.payload;
    },
  },
});

export const { setMatchLocationData } = matchLocationSlice.actions;

export const selectMatchLocation = (state: RootState) =>
  state.matchLocationData;

export default matchLocationSlice.reducer;
