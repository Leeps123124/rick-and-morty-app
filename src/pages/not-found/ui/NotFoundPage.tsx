import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <h1>Страница не найдена</h1>
      <p>Возможно, адрес указан неправильно</p>
      <Link className={styles.link} to={"/characters"}>
        Вернуться к персонажам
      </Link>
    </main>
  );
}
