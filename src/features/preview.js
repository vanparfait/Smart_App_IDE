import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preview: true,
};

export const preview = createSlice({
  name: "preview",
  initialState,
  reducers: {
    tooglePreview: (state, action) => {
      state.preview = !state.preview;
    },
    hidePreview: (state, action) => {
      state.preview = false;
    },
  },
});

export const { tooglePreview, hidePreview } = preview.actions;
export default preview.reducer;
