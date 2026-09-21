import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCharacters } from "../../../entities/character/api/characterApi";
import CharacterPagination from "../../../features/character-pagination/ui/CharacterPagination";
import SearchBar from "../../../features/search-character/ui/SearchBar";
import useDebounce from "../../../shared/lib/hooks/useDebounce";
import ErrorState from "../../../shared/ui/error-state/ErrorState";
import LoadingState from "../../../shared/ui/loading-state/LoadingState";
import CharacterList from "../../../widgets/character-list/ui/CharacterList";
import styles from "./CharactersPage.module.css";

export default function CharactersPage() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  function handleSearchChange(newValue: string) {
    setSearchValue(newValue);
    setPage(1);
  }

  const debounceSearchValue = useDebounce({
    value: searchValue,
    delay: 500,
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["characters", debounceSearchValue, page],
    queryFn: () => getCharacters(debounceSearchValue, page),
    retry: (failureCount, error) => {
      const isNotFound =
        axios.isAxiosError(error) && error.response?.status === 404;

      if (isNotFound) {
        return false;
      }

      return failureCount < 2;
    },
  });

  const isNotFound =
    axios.isAxiosError(error) && error.response?.status === 404;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Персонажи</h1>
      <SearchBar value={searchValue} onChange={handleSearchChange} />
      {isLoading && <LoadingState />}
      {isNotFound && <ErrorState message="Персонажи не найдены" />}
      {isError && !isNotFound && (
        <ErrorState message="Ошибка загрузки данных" />
      )}
      {data && <CharacterList characters={data.results} />}
      {data && data.info.pages > 1 && (
        <CharacterPagination
          page={page}
          totalPages={data.info.pages}
          onPageChange={setPage}
        />
      )}
    </main>
  );
}
