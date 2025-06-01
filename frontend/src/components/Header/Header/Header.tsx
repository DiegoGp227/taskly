import Logo from "../Logo/Logo.tsx";
import ProfileButton from "../../../components/Header/ProfileButton/ProfileButton.tsx";
import style from "./style.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div>
        <Logo />
      </div>
      <div >
        <a href="" className={style.title} >taskly</a>
      </div>
      <div className={style.imgDiv}>
        <ProfileButton />
      </div>
    </header>
  );
}

export default Header;
