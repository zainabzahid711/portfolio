import React from "react";
import style from "./Header.module.css";

function Header({ toggleResume, toggleHome }) {
  return (
    <>
      <div className={style.Header}>
        <div className={style.leftContent}>
          <h1 className={style.mainHeading}> PORTFOLIO </h1>
        </div>
        <div className={style.rightContent}>
          <ul className={style.rightItems}>
            <li onClick={toggleHome}>
              <a href="#Home"> Home </a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li onClick={toggleResume}> Resume </li>
            <li> Experiance </li>
            <li> Contact </li>
          </ul>
          <button className={style.rightBtn}> Download The CV </button>
        </div>
      </div>
    </>
  );
}

export default Header;
