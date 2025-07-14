import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog, fetchMore } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  state.items = [];
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    total: 0,
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    updatePage(state, action) {
      state.page = action.payload || 1;
    },
    resetCatalog(state) {
      state.items = [];
      state.total = 0;
      state.page = 1;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        handlePending(state);
        state.items = [];
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.items = items;
        state.loading = false;
        state.error = null;
        state.total = total;
      })
      .addCase(fetchCatalog.rejected, handleRejected)
      .addCase(fetchMore.pending, handlePending)
      .addCase(fetchMore.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.items = state.items.concat(items);
        state.loading = false;
        state.error = null;
        state.total = total;
      })
      .addCase(fetchMore.rejected, handleRejected);
  },
});

export const { updatePage, resetCatalog } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
