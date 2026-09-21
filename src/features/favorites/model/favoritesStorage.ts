import type { Character } from "../../../entities/character/model/types";

const FAVORITES_STORAGE_KEY = "favorites";

export function loadFavorites(): Character[] {
  const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
  if (savedFavorites === null) {
    return [];
  }
  try {
    const parsedFavorites: unknown = JSON.parse(savedFavorites);
    if (!Array.isArray(parsedFavorites)) {
      return [];
    }
    return parsedFavorites as Character[];
  } catch {
    return [];
  }
}
export function saveFavorites(favorites: Character[]): void {
  const serializedFavorites = JSON.stringify(favorites);
  localStorage.setItem(FAVORITES_STORAGE_KEY, serializedFavorites);
}
