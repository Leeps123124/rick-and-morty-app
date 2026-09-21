import { useQuery } from "@tanstack/react-query";
import { useParams, Navigate } from "react-router-dom";
import { getCharacterById } from "../../../entities/character/api/characterApi";
import CharacterDetails from "../../../widgets/character-details/ui/CharacterDetails";
import LoadingState from "../../../shared/ui/loading-state/LoadingState";
import ErrorState from "../../../shared/ui/error-state/ErrorState";
import styles from "./CharacterDetailsPage.module.css";

export default function CharacterDetailsPage() {
  const { id } = useParams();

  const characterId = Number(id);
  const isValidCharacterId = Number.isInteger(characterId) && characterId > 0;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => getCharacterById(String(characterId)),
    enabled: isValidCharacterId,
  });
  if (!isValidCharacterId) {
    return <Navigate to="/404" replace />;
  }
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Персонаж {id}</h1>
      {isLoading && <LoadingState />}
      {isError && <ErrorState message="Ошибка загрузки данных" />}
      {data && <CharacterDetails character={data} />}
    </main>
  );
}
