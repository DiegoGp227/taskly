import style from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function FormSignUp() {
  const navigate = useNavigate();

  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function sendItems(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const credentials = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al registrarse");
      }

      const data = await response.json();
      console.log("Registro exitoso:", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      navigate("/home"); 
    } catch (error: any) {
      console.error("Error en el registro:", error.message);
    }
  }

  return (
    <form className={style.form} onSubmit={sendItems}>
      <input
        type="text"
        placeholder="User Name"
        name="userName"
        className={style.imput}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className={style.imput}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={style.imput}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={style.button} type="submit">
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
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  );
}
export default FormSignUp;
