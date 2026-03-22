import Header from "../../components/Header/Header/index.tsx";
import CardsDiv from "../../components/Home/CardsDiv/index.tsx";
import NewTopicsDiv from "../../components/Home/NewTopicDiv/index.tsx";
import { useState, useRef } from "react";

function HomePage() {
  const [editTopicVisibility, setEditTopicVisibility] =
    useState<boolean>(false);
  const [rendering, setRendering] = useState<boolean>(false);
  const refNewForm = useRef<HTMLDialogElement>(null);

  function changeVisivilityNewS() {
    if (refNewForm.current) {
      refNewForm.current.close();
    }
  }

  function changeRendering() {
    rendering ? setRendering(false) : setRendering(true);
  }

  function changeVisivilityEdit() {
    editTopicVisibility
      ? setEditTopicVisibility(false)
      : setEditTopicVisibility(true);
  }

  return (
    <>
      <Header />
      <CardsDiv
        refNewForm={refNewForm}
        changeVisivilityEdit={changeVisivilityEdit}
        renderingStatus={rendering}
        changeRendering={changeRendering}
      />
      <NewTopicsDiv
        refNewForm={refNewForm}
        changeRendering={changeRendering}
        changeVisivilityNewS={changeVisivilityNewS}
      />
    </>
  );
}

export default HomePage;
