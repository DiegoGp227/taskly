import DeleteTask from "../DeleteTask";
import EditTask from "../EditTask";
import style from "./style.module.css";
import DoneTask from "../DoneTask";
import DoneTaskComplete from "../DoneTaskComplete";
interface tasks {
  id: any;
  user_id?: number;
  topics_id?: number;
  title: string;
  priority?: number;
  status?: number;
  stateDelect: () => void;
}

function TaskDiv({
  title,
  id,
  topics_id,
  priority,
  status,
  user_id,
  stateDelect,
}: tasks) {
  return (
    <>
      {status == 0 ? (
        <div className={style.taskDiv}>
          <DoneTask
            id={id}
            title={title}
            topics_id={topics_id}
            priority={priority}
            user_id={user_id}
            stateUpdate={stateDelect}
          />
          <div className={style.configurationDiv}>
            <EditTask
              id={id}
              title={title}
              topics_id={topics_id}
              priority={priority}
              status={status}
              user_id={user_id}
              stateDelect={stateDelect}
            />
            <DeleteTask id={id} stateDelectClick={stateDelect} />
          </div>
        </div>
      ) : (
        <div className={style.taskDiv}>
          <DoneTaskComplete title={title} />
          <DeleteTask id={id} stateDelectClick={stateDelect} />
        </div>
      )}
    </>
  );
}

export default TaskDiv;
