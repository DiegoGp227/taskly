import Header from "../../components/Header/Header/index.tsx";
import NewTask from "../../components/Task/NewTask/index.tsx";
import TaskList from "../../components/Task/TaskList/index.tsx";
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import CreateTask from "../../components/Task/CreateTask/index.tsx";
import style from "./style.module.css";

function TaskPage() {
  const [id, setId] = useState<number | undefined>();
  const { idTopic, titleTopic } = useParams();
  const [newTaskClick, setNewTaskClick] = useState(false);
  const dg = useRef(null);
  const setStateNewTask = (): void => {
    return newTaskClick == false
      ? setNewTaskClick(true)
      : setNewTaskClick(false);
  };
  useEffect(() => {
    if (idTopic !== undefined) {
      const idNumber = Number(idTopic);
      if (!isNaN(idNumber)) {
        setId(idNumber);
      } else {
        console.warn("El id no es un número válido:", idTopic);
      }
    }
  }, [idTopic]);

  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.firstSection}>
          <div className={style.divTitle}>
            <h1 className={style.title}>
              <Link to="/home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12S6.063 1.25 12 1.25m1.53 7.78a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L10.56 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              {titleTopic}
            </h1>
          </div>
          <div className={style.divbutton}>
            <NewTask Ref={dg} />
            <CreateTask Ref={dg} setStateNewTask={setStateNewTask} />
          </div>
        </section>
        <section className={style.secondSection}>
          <TaskList
            title="To Do"
            id={id}
            tasksStatus={0}
            newTaskClickState={newTaskClick}
            setTaskClickState={setStateNewTask}
          />
          <TaskList
            title="Complete"
            id={id}
            tasksStatus={1}
            newTaskClickState={newTaskClick}
            setTaskClickState={setStateNewTask}
          />
        </section>
      </main>
    </>
  );
}

export default TaskPage;
