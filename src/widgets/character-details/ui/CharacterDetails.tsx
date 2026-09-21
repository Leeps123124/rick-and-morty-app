import type { Character } from "../../../entities/character/model/types";
import FavoritesToggle from "../../../features/favorites/ui/FavoritesToggle";
import styles from "./CharacterDetails.module.css";

interface CharacterDetailsProps {
  character: Character;
}

export default function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{character.name}</h2>
        <div className={styles.info}>
          <p>
            <strong>Статус:</strong> {character.status}
          </p>
          <p>
            <strong>Вид:</strong> {character.species}
          </p>
          <p>Тип: {character.type}</p>
          <p>Пол: {character.gender}</p>
          <p>Происхождение: {character.origin.name}</p>
          <p>Местоположение: {character.location.name}</p>
          <p>Количество эпизодов: {character.episode.length}</p>
          <p>Создан: {new Date(character.created).toLocaleDateString()}</p>
        </div>
        <FavoritesToggle character={character} />
      </div>
    </article>
  );
}
