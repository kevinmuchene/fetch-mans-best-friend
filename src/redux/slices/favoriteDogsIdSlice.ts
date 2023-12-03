import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface FavoriteID {
  favoriteDogsId: string[];
}

const initialState: FavoriteID = {
  favoriteDogsId: [],
};

export const favoriteDogsIdSlice = createSlice({
  name: "favoriteIDs",
  initialState,
  reducers: {
    setFavoriteIDs: (state, action: PayloadAction<string[]>) => {
      state.favoriteDogsId.push(...action.payload);
    },
  },
});

export const { setFavoriteIDs } = favoriteDogsIdSlice.actions;

export const selectFavoriteIDs = (state: RootState) => state.favoriteDogsId;

export default favoriteDogsIdSlice.reducer;
