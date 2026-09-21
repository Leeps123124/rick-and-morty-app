import styles from "./ErrorState.module.css";
interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  return <p className={styles.errorstate}>{message}</p>;
}
