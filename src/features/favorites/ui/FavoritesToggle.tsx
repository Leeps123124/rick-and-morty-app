import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import type { Character } from "../../../entities/character/model/types";
import { toggleFavorite } from "../model/favoritesSlice";
import styles from "./FavoritesToggle.module.css";
interface FavoritesToggleProps {
  character: Character;
}
export default function FavoritesToggle({ character }: FavoritesToggleProps) {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favorites.items.some((item) => item.id === character.id),
  );

  function handleClick() {
    dispatch(toggleFavorite(character));
  }
  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </button>
  );
}
