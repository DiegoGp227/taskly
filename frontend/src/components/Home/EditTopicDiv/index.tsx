import style from "./style.module.css";

interface editTopicsProps {
  displayStatus: string;
  // changeVisivilityEdit: () => void;
}

function EditTopicDiv({ displayStatus }: editTopicsProps) {
  return (
    <div className={style.generalDiv} style={{ display: displayStatus }}>
      <h1 className={style.title}>Edit topic</h1>
      <form className={style.form}>
        <input type="text" className={style.input} placeholder="Title" />
        <textarea
          name=""
          id=""
          placeholder="Description"
          className={style.textArea}
        ></textarea>
        <button type="submit" className={style.button}>
          Send
        </button>
      </form>
    </div>
  );
}

export default EditTopicDiv;
