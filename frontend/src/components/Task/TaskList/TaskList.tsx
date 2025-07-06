import style from "./style.module.css";
import TaskDiv from "../taskDiv";
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
}[];

function TaskList({ title, id, tasksStatus }: TaskListProps) {
  const [tasks, setTasks] = useState<tasksData[] | undefined>();

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/tasks/${id}/${tasksStatus}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Error al obtener tasks");
        }

        const data = await response.json();
        setTasks(data);
        console.log("Data recibida con éxito:", data);
      } catch (error: any) {
        console.error("Error en el fetch:", error.message);
      }
    }

    if (id !== undefined && tasksStatus !== undefined) {
      getTasks();
    }
  }, [id, tasksStatus]); 

  return (
    <section className={style.taskSection}>
      <div className={style.titleDiv}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <div className={style.taskContainer}>
        {tasks && tasks.length > 0 ?  (
        tasks.map((task) => (
          <TaskDiv title={task.title} id={task.id}/>
          
        ))
      ) : (
        <h1>None Info</h1>
      )}
      </div>
    </section>
  );
}

export default TaskList;
