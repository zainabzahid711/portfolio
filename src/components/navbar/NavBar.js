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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
            <Link to="/" onClick={scrollToTop}>
              <li
                onClick={() => {
                  HideandShow();
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/Resume" onClick={scrollToTop}>
              <li
                onClick={() => {
                  HideandShow();
                }}
              >
                Resume
              </li>
            </Link>
            <Link to="/Experience" onClick={scrollToTop}>
              <li
                onClick={() => {
                  HideandShow();
                }}
              >
                Experience
              </li>
            </Link>
            <Link to="/Contact" onClick={scrollToTop}>
              <li
                onClick={() => {
                  HideandShow();
                }}
              >
                Contact
              </li>
            </Link>
          </ul>
          <button className={style.rightBtn}>
            <a href="https://app.flowcv.com/resume/content">Download the CV</a>
          </button>
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
