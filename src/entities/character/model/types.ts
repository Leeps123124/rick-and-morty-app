export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  image: string;
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
}
export interface CharactersInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface CharactersResponse {
  info: CharactersInfo;
  results: Character[];
}
