import style from "./style.module.css";

function NewTopicsDiv() {
  return (
    <div className={style.generalDiv}>
      <h1 className={style.title}>Add new topic</h1>
      <form action="" className={style.form}>
        <input type="text" className={style.input} placeholder="Title"/>
        <textarea name="" id=""placeholder="Description" className={style.textArea}></textarea>
        <button type="submit" className={style.button}>Send</button>
      </form>
    </div>
  );
}
export default NewTopicsDiv;
