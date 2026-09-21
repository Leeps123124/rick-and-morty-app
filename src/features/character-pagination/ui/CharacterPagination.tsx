import styles from "./CharacterPagination.module.css";
interface CharacterPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export default function CharacterPagination({
  page,
  totalPages,
  onPageChange,
}: CharacterPaginationProps) {
  return (
    <nav className={styles.pagination}>
      <button
        className={styles.button}
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Назад
      </button>
      <p className={styles.info}>
        Страница {page} из {totalPages}
      </p>
      <button
        className={styles.button}
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Вперед
      </button>
    </nav>
  );
}
