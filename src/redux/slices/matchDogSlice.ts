import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface MatchDogState {
  matchDog: Dog[];
}

const initialState: MatchDogState = {
  matchDog: [],
};

export const matchDogSlice = createSlice({
  name: "matchDog",
  initialState,
  reducers: {
    setMatchDogData: (state, action: PayloadAction<Dog[]>) => {
      state.matchDog = action.payload;
    },
    clearMatchDogData: (state) => {
      state.matchDog = [];
    },
  },
});

export const { setMatchDogData, clearMatchDogData } = matchDogSlice.actions;

export const selectMatchDog = (state: RootState) => state.matchDog;

export default matchDogSlice.reducer;
