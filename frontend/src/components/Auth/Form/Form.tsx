import style from "./style.module.css";

function Form() {
  return (
      <form action="" className={style.form}>
        <input type="text" placeholder="Email" className={style.imput}/>
        <input type="password" placeholder="Password" className={style.imput}/>
        <button className={style.button}>
            <p>Send</p>
          
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.235 5.68603C20.667 4.49103 19.509 3.33303 18.314 3.76603L3.70898 9.04803C2.50998 9.48203 2.36498 11.118 3.46798 11.757L8.12998 14.456L12.293 10.293C12.4816 10.1109 12.7342 10.0101 12.9964 10.0124C13.2586 10.0146 13.5094 10.1198 13.6948 10.3052C13.8802 10.4906 13.9854 10.7414 13.9877 11.0036C13.9899 11.2658 13.8891 11.5184 13.707 11.707L9.54398 15.87L12.244 20.532C12.882 21.635 14.518 21.489 14.952 20.291L20.235 5.68603Z"
              fill="black"
            />
          </svg>
        </button>
      </form>
  );
}

export default Form;
