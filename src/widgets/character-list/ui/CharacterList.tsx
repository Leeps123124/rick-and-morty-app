import type { Character } from "../../../entities/character/model/types";
import CharacterCard from "./CharacterCard";
import styles from "./CharacterList.module.css";
interface CharacterListProps {
  characters: Character[];
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
