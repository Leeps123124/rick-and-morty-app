import type { FavoriteCharacter } from "./types";
import { isFavoriteCharacters } from "./guards";
const FAVORITES_STORAGE_KEY = "favorites";

export function loadFavorites(): FavoriteCharacter[] {
  const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
  if (savedFavorites === null) {
    return [];
  }
  try {
    const parsedFavorites: unknown = JSON.parse(savedFavorites);
    if (!isFavoriteCharacters(parsedFavorites)) {
      return [];
    }
    return parsedFavorites;
  } catch {
    return [];
  }
}
export function saveFavorites(favorites: FavoriteCharacter[]): void {
  const serializedFavorites = JSON.stringify(favorites);
  localStorage.setItem(FAVORITES_STORAGE_KEY, serializedFavorites);
}
