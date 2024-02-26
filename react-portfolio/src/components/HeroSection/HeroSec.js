import React from "react";
import style from "./HeroSec.module.css";
// import image from "../../assets/png/desktop.jpg";
function HeroSec({ mainText }) {
  return (
    <>
      <div className={style.HeroSec}>
        <div className={style.BgImage}></div>
        <div className={style.textArea}>
          <span className={style.HeroSpan}>Hey There!</span>
          <h1 className={style.HeroHead}>{mainText}</h1>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
