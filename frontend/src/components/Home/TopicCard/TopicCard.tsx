import TopicInfo from "../TopicInfo/TopicInfo";
import EditCard from "../EditCard/EditCard";
import DeleteCard from "../DeleteCard/DeleteCard";
import style from "./style.module.css";

interface CardInfo {
  id: number;
  title: string;
  description: string;
}

function TopicCard({ id, title, description }: CardInfo) {
  return (
    <div className={style.buttonCard}>
      <div className={style.divMain}>
        <h1 className={style.titleMain}>{title}</h1>
        <p className={style.pMain}>
          {id}
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
