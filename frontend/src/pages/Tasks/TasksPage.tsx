import Header from "../../components/Header/Header/index.tsx";
import NewTask from "../../components/Task/NewTask/index.tsx";
import TaskList from "../../components/Task/TaskList/index.tsx";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CreateTask from "../../components/CreateTask/index.tsx";
import style from "./style.module.css";

function TaskPage() {
  const [id, setId] = useState<number | undefined>();
  const { idTopic, titleTopic } = useParams();
  const dg = useRef(null);
  useEffect(() => {
    if (idTopic !== undefined) {
      const idNumber = Number(idTopic);
      if (!isNaN(idNumber)) {
        setId(idNumber);
        console.log("id is " + id);
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
            <h1 className={style.title}>{titleTopic}</h1>
          </div>
          <div className={style.divbutton}>
            <NewTask Ref={dg} />
            <CreateTask Ref={dg} />
          </div>
        </section>
        <section className={style.secondSection}>
          <TaskList title="To Do" id={id} tasksStatus={1} />
          <TaskList title="Complete" id={id} tasksStatus={2} />
        </section>
      </main>
    </>
  );
}

export default TaskPage;
