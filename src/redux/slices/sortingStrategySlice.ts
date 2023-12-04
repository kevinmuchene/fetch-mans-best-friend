import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface InitialState {
  sortingStrategy: string;
  initialPageLoadSort: string;
}

const initialState: InitialState = {
  sortingStrategy: "asc",
  initialPageLoadSort: "asc",
};

export const sortingStrategySlice = createSlice({
  name: "sortingStrategy",
  initialState,
  reducers: {
    setSortingStrategy: (state, action: PayloadAction<string>) => {
      state.sortingStrategy = action.payload;
    },
    setInitialPageLoadSort: (state, action: PayloadAction<string>) => {
      state.initialPageLoadSort = action.payload;
    },
  },
});

export const { setSortingStrategy, setInitialPageLoadSort } =
  sortingStrategySlice.actions;

export const selectSortingStrategy = (state: RootState) =>
  state.sortingStrategy;

export default sortingStrategySlice.reducer;
