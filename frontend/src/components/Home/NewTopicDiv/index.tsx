import style from "./style.module.css";

function NewTopicsDiv() {
  return (
    <div className={style.generalDiv}>
        <h1>
            Add new topic
        </h1>
      <form action="">
        <label htmlFor="">temas</label>
        <input type="text" />
        <label htmlFor="">temas</label>
        <input type="text" />
        <label htmlFor="">temas</label>
        <input type="text" />
      </form>
    </div>
  );
}
export default NewTopicsDiv;
