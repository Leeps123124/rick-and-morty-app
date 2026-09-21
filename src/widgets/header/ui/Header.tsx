import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to={"/favorites"}
        >
          Избранное
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to={"/characters"}
        >
          Персонажи
        </NavLink>
      </nav>
    </header>
  );
}
