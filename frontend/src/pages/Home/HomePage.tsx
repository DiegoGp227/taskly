import Header from "../../components/Header/Header/index.tsx";
import CardsDiv from "../../components/Home/CardsDiv/index.tsx";
import NewTopicsDiv from "../../components/Home/NewTopicDiv/index.tsx";
import EditTopicDiv from "../../components/Home/EditTopicDiv/index.tsx";
import { useEffect, useState, useRef } from "react";

function HomePage() {
  const [editTopicVisibility, setEditTopicVisibility] =
    useState<boolean>(false);
  // const [displayEdit, setDisplayEdit] = useState<string>("flex");
  const [rendering, setRendering] = useState<boolean>(false);
  const refNewForm = useRef<HTMLDialogElement>(null);
  // const [newDivForm, setNewDivForm ] = useState<boolean>(false)

  // function changeVisivilityNew() {
  //   newTopicVisibility
  //     ? setNewTopicVisibility(false)
  //     : setNewTopicVisibility(true);
  // }

  function changeVisivilityNew() {
    if (refNewForm.current) {
      refNewForm.current.showModal();
      // setNewDivForm(true)
    }
  }

  // if (refNewForm.current?.open &&refNewForm ) {

  // }

  // useEffect(() => {

  // }, [editTopicVisibility]);

  function changeVisivilityNewS() {
    if (refNewForm.current) {
      refNewForm.current.close();
    }
  }

  // useEffect(() => {
  //   newTopicVisibility ? setDisplayNew("flex") : setDisplayNew("none");
  // }, [newTopicVisibility]);

  function changeRendering() {
    rendering ? setRendering(false) : setRendering(true);
  }

  function changeVisivilityEdit() {
    editTopicVisibility
      ? setEditTopicVisibility(false)
      : setEditTopicVisibility(true);
  }

  // useEffect(() => {
  //   editTopicVisibility ? setDisplayEdit("flex") : setDisplayEdit("none");
  // }, [editTopicVisibility]);

  return (
    <>
      <Header />
      <CardsDiv
        refNewForm={refNewForm}
        // changeVisivilityNew={changeVisivilityNew}
        changeVisivilityEdit={changeVisivilityEdit}
        renderingStatus={rendering}
        changeRendering={changeRendering}
      />
      <NewTopicsDiv
        refNewForm={refNewForm}
        changeRendering={changeRendering}
        // changeVisivilityNew={changeVisivilityNew}
        changeVisivilityNewS={changeVisivilityNewS}
      />
      {/* <EditTopicDiv changeRendering={changeRendering} /> */}
    </>
  );
}

export default HomePage;
