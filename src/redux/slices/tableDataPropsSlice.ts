// const [nextUrl, setNextUrl] = useState<string | null>("");
//   const [prevUrl, setPrevUrl] = useState<string | null>("");
//   const [tablePaginationCount, setTablePaginationCount] = useState<number>(0);
//   const [tablesData, setTablesData] = useState<Dog[]>([]);

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
  prevUrl: string;
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
    setPaginationCount: (state, action: PayloadAction<number>) => {
      state.tablePaginationCount = action.payload;
    },
    setTablesData: (state, action: PayloadAction<Dog[]>) => {
      state.tablesData = action.payload;
    },
  },
});

export const { setNextUrl, setPrevUrl, setPaginationCount, setTablesData } =
  tabelDataPropsSlice.actions;

export const selectTabelDataProps = (state: RootState) => state.tableDataProps;

export default tabelDataPropsSlice.reducer;
