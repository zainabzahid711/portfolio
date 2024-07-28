import React from "react";
import style from "./HeroSec.module.css";
// import image from "../../assets/png/desktop.jpg";
// import mainVideo from "../../assets/video/Frontenddeveloper.mp4";
function HeroSec({ spanText, mainText }) {
  return (
    <>
      <div className={style.BgImage}>
        {/* <video autoPlay muted loop id="myVideo">
          <source
            className={style.MainVideo}
            src={mainVideo}
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video> */}
        <div className={style.textArea}>
          <span className={style.HeroSpan}>{spanText}</span>
          <h1 className={style.HeroHead}>{mainText}</h1>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
