import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState: any = {
  generatedActivities: {},
};

export const aiGeneratedActivitesSlice = createSlice({
  name: "aiGeneratedActivities",
  initialState,
  reducers: {
    setAIGneratedActivities: (state, action: PayloadAction<any>) => {
      state.generatedActivities = action.payload;
    },
  },
});

export const { setAIGneratedActivities } = aiGeneratedActivitesSlice.actions;

export const selectAIGeneratedActivies = (state: RootState) =>
  state.aIGeneratedActivies;

export default aiGeneratedActivitesSlice.reducer;
