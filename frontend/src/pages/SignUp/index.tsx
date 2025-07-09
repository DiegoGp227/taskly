import FormSignUp from "../../components/Auth/FormSignUp/index.tsx";
import CreateAccount from "../../components/Auth/CreateAccount/index.tsx";
import style from "./style.module.css";
function SignUp() {
  return (
      <main className={style.main}>
        <div className={style.SingUpBox}>
          <div>
            <h1 className={style.title}>Sign Up</h1>
          </div>
          <div>
            <FormSignUp />
          </div>
          <div>
            <CreateAccount />
          </div>
        </div>
      </main>
  );
}

export default SignUp;
