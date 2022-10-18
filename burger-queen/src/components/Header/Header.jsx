/* eslint-disable jsx-a11y/anchor-has-content */
import logo from "../../img/logo.png";
import style from "./Header.module.css";

function Header({img, view, nav}) {
  return (
    <header className={style.header}>
      <div className={style.nameLogo}>
        <img className={style.logo} src={logo} alt="logo" title="logo"></img>
        <h2 className={style.titleLogo}>BURGER QUEEN</h2>
      </div>
      <div className={style.navWaiter}>
        {nav}
        <img
          className={style.logoImg}
          src={img}
          alt={view}
          title={view}
        ></img>
      </div>
    </header>
  );
}

export default Header;
