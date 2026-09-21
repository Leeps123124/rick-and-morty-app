import styles from "./SearchBar.module.css";
interface SearchBarProps {
  value: string;
  onChange: (newValue: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={"Введите имя персонажа"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
