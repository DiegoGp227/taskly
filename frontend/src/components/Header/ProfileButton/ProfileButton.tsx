import profileImg from "../../../assets/butters.webp";
import style from "./style.module.css";

function ProfileButton() {
    return (
        <button className={style.buttonProfile}>
          <img
            src={profileImg}
            alt="Profile img"
            className={style.imgProfile}
          />
        </button>
    )
}

export default ProfileButton;