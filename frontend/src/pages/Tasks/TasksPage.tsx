import Header from "../../components/Header/Header/index.tsx";
import NewTask from "../../components/Task/NewTask/NewTask";
import TaskList from "../../components/Task/TaskList/TaskList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.css";

function TaskPage() {
  const [id, setId] = useState<number | undefined>();
  const { idTopic, titleTopic } = useParams();

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
            <NewTask />
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
