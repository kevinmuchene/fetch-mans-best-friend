import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../Store";

export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

type TablePropsType = {
  nextUrl: string;
  prevUrl?: string;
  tablePaginationCount: number;
  tablesData: Dog[];
};

const initialState: TablePropsType = {
  nextUrl: "",
  prevUrl: "",
  tablePaginationCount: 0,
  tablesData: [],
};

export const tabelDataPropsSlice = createSlice({
  name: "tablesDataProps",
  initialState,
  reducers: {
    setNextUrl: (state, action: PayloadAction<string>) => {
      state.nextUrl = action.payload;
    },
    setPrevUrl: (state, action: PayloadAction<string>) => {
      state.prevUrl = action.payload;
    },

    setTablesData: (state, action: PayloadAction<Dog[]>) => {
      state.tablesData = action.payload;
    },
  },
});

export const { setNextUrl, setPrevUrl, setTablesData } =
  tabelDataPropsSlice.actions;

export const selectTabelDataProps = (state: RootState) => state.tableDataProps;

export default tabelDataPropsSlice.reducer;
