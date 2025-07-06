import Logo from "../Logo/Logo.tsx";
import ProfileButton from "../../../components/Header/ProfileButton/ProfileButton.tsx";
import { Link } from "react-router-dom";

import style from "./style.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div>
        <Logo />
      </div>
      <div>
        <Link to="/home" className={style.title}>
          taskly
        </Link>
      </div>
      <div className={style.imgDiv}>
        <ProfileButton />
      </div>
    </header>
  );
}

export default Header;
