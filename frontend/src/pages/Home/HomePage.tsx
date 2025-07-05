import Header from "../../components/Header/Header/Header.tsx";
import CreateTopic from "../../components/Home/CreateTopic/CreateTopic.tsx";
import TopicCard from "../../components/Home/TopicCard/TopicCard.tsx";
import CardsDiv from "../../components/Home/CardsDiv/CardsDiv.tsx";
import style from "./style.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <CardsDiv />
    </>
  );
}

export default HomePage;
