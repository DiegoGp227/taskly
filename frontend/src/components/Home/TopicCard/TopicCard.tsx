import TopicInfo from "../TopicInfo/TopicInfo";
import EditCard from "../EditCard/EditCard";
import DeleteCard from "../DeleteCard/DeleteCard";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

interface CardInfo {
  id: number;
  title: string;
  description: string;
}

function TopicCard({ id, title, description }: CardInfo) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/tasks/${id}`);
  };

  return (
    <div className={style.divCard} onClick={redirect}>
      <div className={style.divMain}>
        <h1 className={style.titleMain}>{title}</h1>
        <p className={style.pMain}>
          {description}
        </p>
      </div>
      <div className={style.divInfoConfiguration}>
        <div className={style.topicInfoDiv}>
          <TopicInfo />
        </div>
        <div className={style.configurationDiv}>
          <EditCard />
          <DeleteCard />
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
