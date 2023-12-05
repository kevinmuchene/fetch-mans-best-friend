import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

type FilterValues = {
  breeds: string[];
  ageMin: string;
  ageMax: string;
  validZipCodes: string[];
};
interface FilterValueState {
  filterValues: FilterValues;
}
const initialState: FilterValueState = {
  filterValues: {
    breeds: [],
    ageMin: "",
    ageMax: "",
    validZipCodes: [],
  },
};

export const filterValuesSlice = createSlice({
  name: "filterValue",
  initialState,
  reducers: {
    setFilterValuesData: (state, action: PayloadAction<FilterValues>) => {
      state.filterValues = action.payload;
    },
    clearFilterValuesData: (state) => {
      state.filterValues = {
        breeds: [],
        ageMin: "",
        ageMax: "",
        validZipCodes: [],
      };
    },
  },
});

export const { setFilterValuesData, clearFilterValuesData } =
  filterValuesSlice.actions;

export const selectFilterValues = (state: RootState) => state.filterValueData;

export default filterValuesSlice.reducer;
