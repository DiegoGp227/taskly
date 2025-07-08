import { useState, useEffect } from "react";
import style from "./style.module.css";

interface deleteProps {
  id: number;
}

function DeleteCard({ id }: deleteProps) {
  const [topicId, setTopicId] = useState<number>();

  useEffect(() => {
    setTopicId(id);
  }, [id]);

  async function deleteTopic() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/topics/${topicId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al eliminar el tema");
      }
      console.log("Tema eliminado con exito");
    } catch (error: any) {
      console.error("Error en el fetch:", error.message);
    }
  }

  return (
    <button
      className={style.deleteButton}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTopic();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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

export default DeleteCard;
