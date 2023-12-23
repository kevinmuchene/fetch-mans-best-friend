import { combineReducers } from "@reduxjs/toolkit";
import favoriteDogsIdReducer from "./slices/favoriteDogsIdSlice";
import matchDogReducer from "./slices/matchDogSlice";
import matchLocationReducer from "./slices/matchLocationSlice";
import filterValuesReducer from "./slices/filterValuesSlice";
import aiGeneratedActivitesReducer from "./slices/aiGeneratedActivitesSlice";
import sortingStrategyReducer from "./slices/sortingStrategySlice";
import filterResponseObjectReducer from "./slices/filterResponseObjectSlice";
import tableDataPropsReducer from "./slices/tableDataPropsSlice";
import tableStateSlice from "./slices/tableStateSlice";

export const rootReducer = combineReducers({
  favoriteDogsId: favoriteDogsIdReducer,
  matchDog: matchDogReducer,
  matchLocationData: matchLocationReducer,
  filterValueData: filterValuesReducer,
  aIGeneratedActivies: aiGeneratedActivitesReducer,
  sortingStrategy: sortingStrategyReducer,
  filterResponseObject: filterResponseObjectReducer,
  tableDataProps: tableDataPropsReducer,
  tableState: tableStateSlice,
});
