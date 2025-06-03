import Header from "../../components/Header/Header/Header";
import NewTask from "../../components/Task/NewTask/NewTask";
import TaskList from "../../components/Task/TaskList/TaskList";
import style from "./style.module.css";

function TaskPage() {
  return (
    <>
      <Header />
      <main className={style.main} >
        <section className={style.firstSection}>
          <div className={style.divTitle}>
            <h1 className={style.title} >Womens</h1>
          </div> 
          <div className={style.divbutton} >
            <NewTask />
          </div>
        </section>
        <div className={style.divTaks} >
            <TaskList title="To Do" tasks={1} />
            <TaskList title="Complete" tasks={2} />
        </div>
      </main>
    </>
  );
}

export default TaskPage;
