import Header from "../../components/Header/Header/index.tsx";
import CardsDiv from "../../components/Home/CardsDiv/index.tsx";
import NewTopicsDiv from "../../components/Home/NewTopicDiv/index.tsx";
import EditTopicDiv from "../../components/Home/EditTopicDiv/index.tsx";
import { useEffect, useState } from "react";

function HomePage() {
  const [newTopicVisibility, setNewTopicVisibility] = useState<boolean>(false);
  const [displayNew, setDisplayNew] = useState<string>("flex");
  const [editTopicVisibility, setEditTopicVisibility] =useState<boolean>(false);
  const [displayEdit, setDisplayEdit] = useState<string>("flex");
  const [rendering, setRendering] = useState<boolean>(false);

  function changeVisivilityNew() {
    newTopicVisibility
      ? setNewTopicVisibility(false)
      : setNewTopicVisibility(true);
  }

  useEffect(() => {
    newTopicVisibility ? setDisplayNew("flex") : setDisplayNew("none");
  }, [newTopicVisibility]);

  function changeRendering() {
    rendering ? setRendering(false) : setRendering(true);
  }

  function changeVisivilityEdit() {
    editTopicVisibility
      ? setEditTopicVisibility(false)
      : setEditTopicVisibility(true);
  }

  useEffect(() => {
    editTopicVisibility ? setDisplayEdit("flex") : setDisplayEdit("none");
  }, [editTopicVisibility]);

  return (
    <>
      <Header />
      <CardsDiv
        changeVisivilityNew={changeVisivilityNew}
        changeVisivilityEdit={changeVisivilityEdit}
        renderingStatus={rendering}
        changeRendering={changeRendering}
      />
      <NewTopicsDiv
        displayStatus={displayNew}
        changeRendering={changeRendering}
        changeVisivilityNew={changeVisivilityNew}
      />
      <EditTopicDiv displayStatus={displayEdit} />
    </>
  );
}

export default HomePage;
