import Header from "../../components/Header/Header/Header.tsx";
import CreateTopic from "../../components/Home/CreateTopic/CreateTopic.tsx";
import TopicCard from "../../components/Home/TopicCard/TopicCard.tsx";
import style from "./style.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className={style.main} >
        <CreateTopic />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
      </main>
    </>

  );
}

export default HomePage;
