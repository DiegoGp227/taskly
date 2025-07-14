import style from "./index.module.css";
import { useState, useEffect } from "react";
interface Prop {
  Ref: React.Ref<HTMLDialogElement>;
}

const CreateTask = ({ Ref }: Prop) => {
  const [inp, setInp] = useState<string>("");
  const [userId, setUserId] = useState<string | number>("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId));
    }
  }, []);

  const CreateTask = async () => {
    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        topics_id: window.location.pathname.split("/")[2],
        title: inp,
        priority: 1,
        status: 0,
      }),
    });
    Ref.current.close();
  };
  return (
    <>
      <dialog ref={Ref} closedby="any" className={style.generalDiv}>
        <h1 className={style.title}>New tasks</h1>
        <input
          className={style.input}
          type="text"
          placeholder="task"
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <form action="dialog" className={style.form}>
          <button
            className={style.button}
            onClick={(e) => {
              e.preventDefault();
              CreateTask();
            }}
          >
            send
          </button>
        </form>
      </dialog>
    </>
  );
};

export default CreateTask;
