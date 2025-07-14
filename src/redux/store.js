import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoriteReducer } from "./favorite/slice";
import { catalogReducer } from "./catalog/slice";
import { filtersReducer } from "./filters/slice";

const persistFavoriteConfig = {
  key: "favorite",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    favorite: persistReducer(persistFavoriteConfig, favoriteReducer), 
    catalog: catalogReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
