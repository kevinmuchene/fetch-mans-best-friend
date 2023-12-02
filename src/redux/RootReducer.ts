import { combineReducers } from "@reduxjs/toolkit";
import breedsReducer from "./slices/breedDataSlice";
export const rootReducer = combineReducers({
  breeds: breedsReducer,
});
