import { useState, useEffect } from "react";
import style from "./style.module.css";

// interface renderingProps {
//   changeRendering: () => void;
//   changeTopicStatus: () => void;
// }

interface newTopicsProps {
  displayStatus: string;
  changeRendering: () => void;
  changeVisivilityNew: () => void;
}

// function NewTopicsDiv({ changeRendering, changeTopicStatus }: renderingProps) {
function NewTopicsDiv({
  displayStatus,
  changeRendering,
  changeVisivilityNew,
}: newTopicsProps) {
  const [user_id, setUserId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  async function sendData(e: React.FormEvent<HTMLFormElement>) {
    const data = {
      user_id,
      title,
      description,
    };

    e.preventDefault();
    if (data) {
      try {
        const response = await fetch("http://localhost:5000/api/topics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Error al obtener topics");
        }
        console.log("Data añadida con éxito:", data);
        changeRendering();
        changeVisivilityNew();
        setTitle("");
        setDescription("");
      } catch (error: any) {
        console.error("Error en el fetch:", error.message);
      }
    }
  }

  return (
    <div className={style.generalDiv} style={{ display: displayStatus }}>
      <h1 className={style.title}>Add new topic</h1>
      <form className={style.form} onSubmit={sendData}>
        <input
          type="text"
          className={style.input}
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="Description"
          className={style.textArea}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button type="submit" className={style.button}>
          Send
        </button>
      </form>
    </div>
  );
}
export default NewTopicsDiv;
