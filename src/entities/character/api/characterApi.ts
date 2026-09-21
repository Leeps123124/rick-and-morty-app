import { apiClient } from "../../../shared/api/apiClient";
import type { CharactersResponse, Character } from "../model/types";

export async function getCharacters(
  name: string,
  page: number,
): Promise<CharactersResponse> {
  const response = await apiClient.get<CharactersResponse>("/character", {
    params: {
      name,
      page,
    },
  });
  return response.data;
}

export async function getCharacterById(id: string): Promise<Character> {
  const response = await apiClient.get<Character>(`/character/${id}`);
  return response.data;
}
