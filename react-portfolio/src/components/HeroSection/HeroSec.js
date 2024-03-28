import React from "react";
import style from "./HeroSec.module.css";
// import image from "../../assets/png/desktop.jpg";
function HeroSec({ spanText, mainText }) {
  return (
    <>
      <div className={style.BgImage}>
        <div className={style.textArea}>
          <span className={style.HeroSpan}>{spanText}</span>
          <h1 className={style.HeroHead}>{mainText}</h1>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
