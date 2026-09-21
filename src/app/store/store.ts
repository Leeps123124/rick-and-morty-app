import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../../features/favorites/model/favoritesSlice";
import {
  loadFavorites,
  saveFavorites,
} from "../../features/favorites/model/favoritesStorage";

const preloadedState = {
  favorites: {
    items: loadFavorites(),
  },
};
export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveFavorites(state.favorites.items);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
