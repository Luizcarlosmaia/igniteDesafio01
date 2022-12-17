import ToDoLogo from "../assets/Logo-toDo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.Container}>
      <img src={ToDoLogo} alt="Logotipo ToDo" />
    </div>
  );
}
