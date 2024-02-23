import React, { useState } from "react";
import style from "./NavBar.module.css";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    HideandShow();
  };

  const HideandShow = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className={style.NavBar}>
        <div className={style.leftContent}>
          <h1 className={style.mainHeading}> PORTFOLIO </h1>
        </div>
        <div
          className={showNav ? style.rightContentActive : style.rightContent}
        >
          <ul className={style.rightItems}>
            <li>
              <a> Home </a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li> Resume </li>
            <li> Experiance </li>
            <li> Contact </li>
          </ul>
          <button className={style.rightBtn}> Download The CV </button>
        </div>

        <div id="bar" className={style.responsive}>
          <i
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={() => {
              handleClick();
              HideandShow();
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default NavBar;
