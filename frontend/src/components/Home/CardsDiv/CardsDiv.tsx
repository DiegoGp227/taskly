import TopicCard from "../TopicCard/TopicCard";
import CreateTopic from "../CreateTopic/CreateTopic";
import { useState, useEffect } from "react";
import style from "./style.module.css";

interface Topic {
  id: number;
  title: string;
  description: string;
}

function CardsDiv() {
  const [user, setUser] = useState<string>("");
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUser(userId);

      fetch(`http://localhost:5000/api/topics/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al traer la información");
          }
          return response.json();
        })
        .then((data: Topic[]) => {
          setTopics(data);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, []);

  return (
    <main className={style.main} id="main">
      <CreateTopic />
      {topics.length === 0 ? (
        <p>No hay temas para mostrar.</p>
      ) : (
        topics.map((topic) => (
          <TopicCard
            key={topic.id} // Siempre importante en listas
            id={topic.id}
            title={topic.title}
            description={topic.description}
          />
        ))
      )}
    </main>
  );
}

export default CardsDiv;

