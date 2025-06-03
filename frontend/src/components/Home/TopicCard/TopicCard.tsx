import TopicInfo from "../TopicInfo/TopicInfo";
import EditCard from "../EditCard/EditCard";
import DeleteCard from "../DeleteCard/DeleteCard";
import { useState, useEffect } from "react";
import style from "./style.module.css";


function TopicCard() {

    const [userId, setUserId] = useState<number>();
    
      useEffect(() => {
        const storedId = localStorage.getItem("userId");
        if (storedId) {
          setUserId(Number(storedId));
        }
      }, []);
      
      useEffect(() => {
        fetch(`http://localhost:5000/api/topics/${userId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al traer la información");
            }
            return response.json();
          })
          .then((data) => {
            
          })
          .catch((error) => console.error("Error:", error));
      });
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