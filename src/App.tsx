import "./global.css";
import { Header } from "../src/components/Header";
import styles from "./app.module.css";
import { FormNewTask } from "./components/FormNewTask";
import { EmptyTask } from "./components/EmptyTask";
import { Task } from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export interface ITasks {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setNewTasks] = useState<ITasks[]>([]);
  const [countChecked, setCountChecked] = useState(0);

  function handleDeleteTask(idToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== idToDelete;
    });
    const countTotalTasksIsCompleted = tasksWithoutDeleteOne.filter(
      (task) => task.isCompleted
    ).length;
    setNewTasks(tasksWithoutDeleteOne);
    setCountChecked(countTotalTasksIsCompleted);
  }

  function handleAddNewTask(contentTask: string) {
    const newTask: ITasks = {
      id: uuidv4(),
      content: contentTask,
      isCompleted: false,
    };
    setNewTasks([...tasks, newTask]);
  }

  function handleUpdateIsCompleted(idToChangeCheck: string) {
    const upDateTasks = tasks.map((task) => {
      if (task.id === idToChangeCheck) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    const countTotalTasksIsCompleted = upDateTasks.filter(
      (task) => task.isCompleted
    ).length;
    setNewTasks(upDateTasks);

    setCountChecked(countTotalTasksIsCompleted);
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <div className={styles.Container}>
      <Header />
      <FormNewTask onNewTask={handleAddNewTask} />
      <div className={styles.Wrapper}>
        <div className={styles.QtdTask}>
          <strong>
            Tarefas criadas <span>{tasks.length}</span>
          </strong>
          <strong>
            Concluídas{" "}
            <span>
              {tasks.length > 0
                ? `${countChecked} de ${tasks.length}`
                : tasks.length}
            </span>
          </strong>
        </div>
        <div className={styles.Tasks}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <Task
                  id={task.id}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  onDeleteTask={handleDeleteTask}
                  onChange={handleUpdateIsCompleted}
                />
              );
            })
          ) : (
            <EmptyTask />
          )}
        </div>
      </div>
    </div>
  );
}
