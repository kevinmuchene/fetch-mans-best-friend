import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface TableState {
  page: number;
}

const initialState: TableState = {
  page: 0,
};

export const tableStateSlice = createSlice({
  name: "tableStateSlice",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = tableStateSlice.actions;

export const selectPageState = (state: RootState) => state.tableState;

export default tableStateSlice.reducer;
