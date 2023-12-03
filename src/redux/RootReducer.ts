import { combineReducers } from "@reduxjs/toolkit";
import breedsReducer from "./slices/breedDataSlice";
import favoriteDogsIdReducer from "./slices/favoriteDogsIdSlice";
import matchDogReducer from "./slices/matchDogSlice";
export const rootReducer = combineReducers({
  breeds: breedsReducer,
  favoriteDogsId: favoriteDogsIdReducer,
  matchDog: matchDogReducer,
});
