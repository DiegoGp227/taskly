import TopicCard from "../TopicCard/TopicCard";
import CreateTopic from "../CreateTopic/CreateTopic";
import { useState, useEffect } from "react";
import style from "./style.module.css";

function CardsDiv() {
  const [userId, setUserId] = useState<string>("");
  const [topics, setTopics] = useState<topicsData>();

  type topicsData = {
    id: number;
    title: string;
    description: string;
  }[];

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    async function getTopics() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/topics/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Error al obtener topics");
        }

        const data = await response.json();
        setTopics(data);
        console.log("Data recibida con éxito:", data);
      } catch (error: any) {
        console.error("Error en el fetch:", error.message);
      }
    }

    getTopics();
  }, [userId]);

  return (
    <main className={style.main} id="main">
      <CreateTopic />
      {topics && topics.length > 0 ? (
        topics.map((topic) => (
          <TopicCard
            id={topic.id}
            title={topic.title}
            description={topic.description}
          />
        ))
      ) : (
        <p>No topics found</p>
      )}
    </main>
  );
}

export default CardsDiv;
