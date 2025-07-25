import style from "./style.module.css";

interface Prop {
  title: string;
}

const DoneTaskComplete = ({ title }: Prop) => {
  return (
    <div className={style.divText}>
      <label htmlFor="" className={style.labelText}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z"
          />
        </svg>
        {title}
      </label>
    </div>
  );
};
export default DoneTaskComplete;
