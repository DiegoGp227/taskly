import style from "./style.module.css";

interface Prop {
  id: number;
  user_id?: number;
  topics_id?: number;
  title: string;
  priority?: number;
  stateUpdate?: () => void;
}

const DomeTask = ({
  id,
  title,
  user_id,
  priority,
  topics_id,
  stateUpdate,
}: Prop) => {
  const DoneTaskClick = async () => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        id,
        user_id,
        priority,
        status: 1,
        topics_id,
      }),
    });
    stateUpdate(true);
  };
  return (
    <div className={style.divText}>
      <form action="send">
        <input
          type="checkbox"
          id={`task${id}`}
          className={style.checkbox}
          onClick={() => {
            DoneTaskClick();
          }}
        />

        <label htmlFor={`task${id}`} className={style.labelText}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
              clip-rule="evenodd"
            />
          </svg>
          {title}
        </label>
      </form>
    </div>
  );
};

export default DomeTask;
