import React, { useState } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Resume">
              <li>Resume</li>
            </Link>
            <Link to="/Experience">
              <li>Experience</li>
            </Link>
            <Link to="/Contact">
              <li>Contact</li>
            </Link>
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
