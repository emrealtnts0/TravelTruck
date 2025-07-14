import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.items = state.items.filter((id) => id !== payload);
    },
    toggleFavorite: (state, { payload }) => {
      const found = state.items.find((id) => id === payload);
      if (found) {
        state.items = state.items.filter((id) => id !== payload);
      } else {
        state.items.push(payload);
      }
    },
  },
});
export const { addFavorite, removeFavorite, toggleFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
