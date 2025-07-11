import style from "./index.module.css";

const CreateTask = ({ Ref }) => {
  return (
    <>
      <dialog ref={Ref}>
        <div className={style.generalDiv}>
          <h1 className={style.title}>New tak</h1>
          <form action="dialog" className={style.form}>
            <input className={style.input} type="text" placeholder="task" />
            <button type="submit" className={style.button}>
              send
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateTask;
