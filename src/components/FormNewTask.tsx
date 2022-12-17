import { ChangeEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./formNewTask.module.css";
import { ToastContainer, toast } from "react-toastify";

interface TextProps {
  onNewTask: (contentTask: string) => void;
}
export function FormNewTask({ onNewTask }: TextProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleTextForNewTask() {
    if (newTaskText.length > 0) {
      onNewTask(newTaskText);
      setNewTaskText("");
    } else {
      <ToastContainer />;
    }
  }

  function handleNewTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <form className={styles.Container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa..."
        onChange={handleNewTextChange}
        value={newTaskText}
      ></input>
      <button onClick={handleTextForNewTask} type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
