import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import type { FavoriteCharacter } from "../model/types";
import { toggleFavorite } from "../model/favoritesSlice";
import styles from "./FavoritesToggle.module.css";
interface FavoritesToggleProps {
  character: FavoriteCharacter;
}
export default function FavoritesToggle({ character }: FavoritesToggleProps) {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favorites.items.some((item) => item.id === character.id),
  );

  function handleClick() {
    const favoriteCharacter: FavoriteCharacter = {
      id: character.id,
      name: character.name,
      status: character.status,
      image: character.image,
    };
    dispatch(toggleFavorite(favoriteCharacter));
  }
  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </button>
  );
}
