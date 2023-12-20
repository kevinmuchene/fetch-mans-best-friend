import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

type ApiFilterResponseObjectType = {
  next: string;
  prev?: string;
  resultIds: string[];
  total: number;
};

interface FilterResponseState {
  filterResponseObject: ApiFilterResponseObjectType;
}

const initialState: FilterResponseState = {
  filterResponseObject: {
    next: "",
    resultIds: [],
    total: 0,
  },
};

export const filterResponseObjectSlice = createSlice({
  name: "filterResponseObjectSlice",
  initialState,
  reducers: {
    setFilterResponseObject: (
      state,
      action: PayloadAction<ApiFilterResponseObjectType>
    ) => {
      state.filterResponseObject = action.payload;
    },
  },
});

export const { setFilterResponseObject } = filterResponseObjectSlice.actions;

export const selectFilterResponseObject = (state: RootState) =>
  state.filterResponseObject;

export default filterResponseObjectSlice.reducer;
