import style from "./style.module.css";
import { useRef } from "react";
function EditTask() {
  const DialogRef = useRef(null);
  return (
    <>
      <button
        className={style.buttonEdit}
        onClick={() => {
          DialogRef.current.showModal();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={style.svg}
        >
          <g
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
          </g>
        </svg>
      </button>
      <dialog ref={DialogRef} closedby="any">
        <div className={style.generalDiv}>
          <h1 className={style.title}>Edit tasks</h1>
          <input className={style.input} type="text" placeholder="new Task" />
          <form action="dialog" className={style.form}>
            <button className={style.button}>Send</button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default EditTask;
