import type { FavoriteCharacter } from "../../../features/favorites/model/types";
import CharacterCard from "./CharacterCard";
import styles from "./CharacterList.module.css";
interface CharacterListProps {
  characters: FavoriteCharacter[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className={styles.list}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
