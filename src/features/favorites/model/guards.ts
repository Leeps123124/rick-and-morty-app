import type { FavoriteCharacter } from "./types";

export function isFavoriteCharacter(
  value: unknown,
): value is FavoriteCharacter {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === "number" &&
    typeof candidate.name === "string" &&
    typeof candidate.image === "string" &&
    (candidate.status === "Alive" ||
      candidate.status === "Dead" ||
      candidate.status === "unknown")
  );
}
export function isFavoriteCharacters(
  value: unknown,
): value is FavoriteCharacter[] {
  return Array.isArray(value) && value.every(isFavoriteCharacter);
}
