import DeleteTask from "../DeleteTask";
import EditTask from "../EditTask";
import style from "./style.module.css";

interface tasks {
  id: any;
  user_id?: number;
  topics_id?: number;
  title: string;
  priority?: number;
  status?: number;
}

function TaskDiv({ title, id }: tasks) {
  return (
    <div className={style.taskDiv}>
      <div className={style.divText}>
        <form action="send">
          <input type="checkbox" id={`task${id}`} className={style.checkbox} />
          <label htmlFor={`task${id}`} className={style.labelText}>
            {title}
          </label>
        </form>
      </div>
      <div className={style.configurationDiv}>
        <EditTask />
        <DeleteTask id={id} />
      </div>
    </div>
  );
}

export default TaskDiv;
