import DeleteTask from "../DeleteTask/DeleteTask";
import EditTask from "../EditTask/EditTask";
import style from "./style.module.css";


interface TaskListProps {
  title: string;
  tasks: number;
}


function TaskList ({ title, tasks }: TaskListProps) {
  return (
    <section className={style.taskSection}>
      <div className={style.titleDiv}>
        <h2 className={style.title} >{title}</h2>
      </div>
      <div className={style.taskContainer}>
        <div className={style.taskDiv}>
          <div className={style.divText}>
            <form action="send">
              <input type="checkbox" id={`task${tasks}`} className={style.checkbox} />
              <label htmlFor={`task${tasks}`} className={style.labelText} >Stady in the house</label>
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
