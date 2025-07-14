import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "",
  equipments: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeLocation(state, { payload }) {
      state.location = payload || "";
    },
    changeType(state, { payload }) {
      state.type = payload || "";
    },
    changeEquipments(state, { payload }) {
      state.equipments = payload || [];
    },
    toggleEquipments(state, { payload }) {
      const { name, value } = payload;
      const exists = state.equipments.some(
        (equip) => equip.name === name && equip.value === value
      );
      if (exists) {
        state.equipments = state.equipments.filter(
          (equip) => equip.name !== name
        );
      } else {
        state.equipments.push({ name, value });
      }
    },
    setFilters(state, { payload }) {
      const { type = "", equipments = [], location = "" } = payload || {};
      state.type = type;
      state.location = location;
      state.equipments = equipments;
    },
  },
});

export const {
  changeLocation,
  changeType,
  changeEquipments,
  toggleEquipments,
  setFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
