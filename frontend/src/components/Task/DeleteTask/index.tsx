import style from "./style.module.css";

interface Prop {
  id: number;
  stateDelectClick: () => void;
}

function DeleteTask({ id, stateDelectClick }: Prop) {
  const DelectTasks = () => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
    });
    stateDelectClick(true);
  };
  return (
    <button
      className={style.button}
      onClick={() => {
        DelectTasks();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className={style.svg}
      >
        <path
          fill="#f00"
          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
        />
      </svg>
    </button>
  );
}
export default DeleteTask;
