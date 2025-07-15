import TopicCard from "../TopicCard";
import CreateTopic from "../CreateTopic";
import { useState, useEffect } from "react";
import style from "./style.module.css";

interface CardsDivProps {
  refNewForm: React.Ref<HTMLDialogElement>;
  changeRendering: () => void;
  changeVisivilityEdit: () => void;
  renderingStatus: boolean;
}

type topicsData = {
  id: number;
  title: string;
  description: string;
}[];

function CardsDiv({
  refNewForm,
  renderingStatus,
  changeRendering,
  changeVisivilityEdit,
}: CardsDivProps) {
  const [userId, setUserId] = useState<string>("");
  const [topics, setTopics] = useState<topicsData>();

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
        data.reverse();
        setTopics(data);
      } catch (error: any) {
        console.error("Error en el fetch:", error.message);
      }
    }

    getTopics();
  }, [userId, renderingStatus]);

  return (
    <main className={style.main}>
      <CreateTopic refNewForm={refNewForm} />
      {topics && topics.length > 0 ? (
        topics.map((topic) => (
          <TopicCard
            id={topic.id}
            title={topic.title}
            description={topic.description}
            changeRendering={changeRendering}
            changeVisivilityEdit={changeVisivilityEdit}
          />
        ))
      ) : (
        <p>No topics found</p>
      )}
    </main>
  );
}

export default CardsDiv;
