import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface BreedDataType {
  breed: string[];
}

const initialState: BreedDataType = {
  breed: [],
};

export const breedDataSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<string[]>) => {
      state.breed = action.payload;
    },
  },
});

export const { setBreeds } = breedDataSlice.actions;

export const selectBreeds = (state: RootState) => state.breeds;

export default breedDataSlice.reducer;
