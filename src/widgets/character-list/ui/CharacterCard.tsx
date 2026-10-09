import type { FavoriteCharacter } from "../../../features/favorites/model/types";
import styles from "./CharacterCard.module.css";
import { Link } from "react-router-dom";
import FavoritesToggle from "../../../features/favorites/ui/FavoritesToggle";
interface CharacterCardProps {
  character: FavoriteCharacter;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className={styles.card}>
      <Link className={styles.link} to={`/characters/${character.id}`}>
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
        />
        <div className={styles.content}>
          <h2 className={styles.name}>{character.name}</h2>
          <p className={styles.status}>{character.status}</p>
        </div>
      </Link>
      <FavoritesToggle character={character} />
    </article>
  );
}
