import DeleteTask from "../DeleteTask/DeleteTask";
import EditTask from "../EditTask/EditTask";
import type { StatusTasks } from "../../../types/task.types";
import style from "./style.module.css";


interface TaskListProps {
  title: string;
  tasks: StatusTasks[];
}


function TaskList ({ title }: TaskListProps) {
  return (
    <section className={style.taskSection}>
      <div className={style.titleDiv}>
        <h2>{title}</h2>
      </div>
      <div className={style.taskContainer}>
        <div className={style.taskDiv}>
          <div className={style.divText}>
            <form action="send">
              <input type="checkbox" id="task1" className={style.checkbox} />
              <label htmlFor="task1">Stady in the house</label>
            </form>
          </div>
          <div className={style.configurationDiv}>
            <EditTask />
            <DeleteTask />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskList;
