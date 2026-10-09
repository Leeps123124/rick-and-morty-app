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
let previousFavorites = store.getState().favorites.items;

store.subscribe(() => {
  const currentFavorites = store.getState().favorites.items;

  if (currentFavorites === previousFavorites) {
    return;
  }

  previousFavorites = currentFavorites;
  saveFavorites(currentFavorites);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
