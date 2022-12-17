import noTask from '../assets/sem-task.svg';
import styles from './emptyTask.module.css';

export function EmptyTask() {
  return (
    <div className={styles.Container}>
        <img src={noTask} />
      <p>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
