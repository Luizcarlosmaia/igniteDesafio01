import { Trash } from "phosphor-react";
import { useState } from "react";
import { ITasks } from "../App";
import styles from "./task.module.css";

export interface ITask extends ITasks {
  onDeleteTask: (id: string) => void;
  onChange: (id: string) => void;
}

export function Task({ id, content, isCompleted, onDeleteTask, onChange }: ITask) {
  const [isCheckedBox, setIsCheckedBox] = useState(isCompleted);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChecked() {
    setIsCheckedBox(!isCheckedBox);
    onChange(id);
  }

  return (
    <form className={styles.Wrapper}>
      <div className={styles.CheckboxAndContent}>
        <input type="checkbox" onChange={handleChecked} />
        <label
          className={isCheckedBox ? styles.LabelChecked : styles.Label}
          htmlFor="c1"
        >
          {content}
        </label>
      </div>
      <button
        className={styles.DeleteButton}
        title="Deletar comentario"
        onClick={handleDeleteTask}
      >
        <Trash size={20} />
      </button>
    </form>
  );
}
