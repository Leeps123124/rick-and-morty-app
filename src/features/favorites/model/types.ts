export interface FavoriteCharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  image: string;
}
