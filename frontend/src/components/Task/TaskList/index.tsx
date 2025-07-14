import style from "./style.module.css";
import TaskDiv from "../taskDiv";
import TaskNotFound from "../TasksNotFound";
import { useState, useEffect } from "react";

interface TaskListProps {
  title: string;
  id: number | undefined;
  tasksStatus: number;
}

interface tasksData {
  id: number;
  user_id: number;
  topics_id: number;
  title: string;
  priority: number;
  status: number;
}
[];

function TaskList({ title, id, tasksStatus }: TaskListProps) {
  const [tasks, setTasks] = useState<tasksData[] | undefined>();
  const [delectState, setDelectState] = useState<boolean>(false);
  function changeStatus() {
    delectState ? setDelectState(false) : setDelectState(true);
  }
  useEffect(() => {
    async function getTasks() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/tasks/${id}/${tasksStatus}`
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Error al obtener tasks");
        }

        const data = await response.json();
        setTasks(data);
        console.log("Data recibida con éxito:", data); // este console.log no lo puse yo 😡
      } catch (error: any) {
        console.error("Error en el fetch:", error.message);
      }
    }

    if (id !== undefined && tasksStatus !== undefined) {
      getTasks();
    }
  }, [id, tasksStatus, delectState]);

  return (
    <section className={style.taskSection}>
      <div className={style.titleDiv}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <div className={style.taskContainer}>
        {tasks && tasks.length > 0 ? (
          tasks
            .map((task) => (
              <TaskDiv
                title={task.title}
                id={task.id}
                priority={task.priority}
                status={task.status}
                user_id={task.user_id}
                topics_id={task.topics_id}
                stateDelect={changeStatus}
                key={task.id}
              />
            ))
            .reverse()
        ) : (
          <TaskNotFound />
        )}
      </div>
    </section>
  );
}

export default TaskList;
