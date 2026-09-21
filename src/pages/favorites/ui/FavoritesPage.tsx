import { useAppSelector } from "../../../app/store/hooks";
import CharacterList from "../../../widgets/character-list/ui/CharacterList";
import styles from "./FavoritesPage.module.css";
export default function FavoritesPage() {
  const favoriteCharacters = useAppSelector((state) => state.favorites.items);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Избранные персонажи</h1>
      {favoriteCharacters.length === 0 ? (
        <p className={styles.empty}>Вы еще не добавили персонажа в избранное</p>
      ) : (
        <CharacterList characters={favoriteCharacters} />
      )}
    </main>
  );
}
