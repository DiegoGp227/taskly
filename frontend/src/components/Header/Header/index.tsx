import Logo from "../Logo/index.tsx";
import ProfileButton from "../ProfileButton/index.tsx";
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
