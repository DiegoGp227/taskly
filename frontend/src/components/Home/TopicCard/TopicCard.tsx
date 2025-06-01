import TopicInfo from "../TopicInfo/TopicInfo";
import EditCard from "../EditCard/EditCard";
import DeleteCard from "../DeleteCard/DeleteCard";
import style from "./style.module.css";


function TopicCard() {
    return (
        <button className={style.buttonCard} >
            <div className={style.divMain} >
            <h1 className={style.titleMain} >Womens</h1>
            <p className={style.pMain} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel reprehenderit harum, esse illo voluptatem dolor iste lor</p>
            </div>
            <div className={style.divInfoConfiguration}  >
                <div className={style.topicInfoDiv} >
                    <TopicInfo />
                </div>
                <div className={style.configurationDiv}>
                    <EditCard />
                    <DeleteCard />
                </div>
            </div>
        </button>
    )
}

export default TopicCard;