import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface InitialState {
  sortingStrategy: string;
}

const initialState: InitialState = {
  sortingStrategy: "asc",
};

export const sortingStrategySlice = createSlice({
  name: "sortingStrategy",
  initialState,
  reducers: {
    setSortingStrategy: (state, action: PayloadAction<string>) => {
      state.sortingStrategy = action.payload;
    },
  },
});

export const { setSortingStrategy } = sortingStrategySlice.actions;

export const selectSortingStrategy = (state: RootState) =>
  state.sortingStrategy;

export default sortingStrategySlice.reducer;
