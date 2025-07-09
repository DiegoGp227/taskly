import TopicInfo from "../TopicInfo";
import EditCard from "../index/EditCard";
import DeleteCard from "../DeleteCard";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

interface CardInfo {
  id: number;
  title: string;
  description: string;
  changeRendering: () => void;
  changeVisivilityEdit: () => void;
}

function TopicCard({ id, title, description, changeRendering, changeVisivilityEdit }: CardInfo) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/tasks/${id}/${title}`);
  };

  return (
    <div className={style.divCard} onClick={redirect}>
      <div className={style.divMain}>
        <h1 className={style.titleMain}>{title}</h1>
        <p className={style.pMain}>{description}</p>
      </div>
      <div className={style.divInfoConfiguration}>
        <div className={style.topicInfoDiv}>
          <TopicInfo />
        </div>
        <div className={style.configurationDiv}>
          <EditCard changeVisivilityEdit={changeVisivilityEdit} />
          <DeleteCard id={id} changeRendering={changeRendering} />
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
