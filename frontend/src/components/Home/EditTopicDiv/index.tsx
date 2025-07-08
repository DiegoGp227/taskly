import style from "./style.module.css";

function EditTopicDiv() {
    


  return (
    <div className={style.generalDiv}>
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