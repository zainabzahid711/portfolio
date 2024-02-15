import React from "react";
import style from "./BgImage.module.css";
import bgimagee from "../../assets/png/pexels-photo-2653362.jpeg";

function BgImage() {
  return (
    <div className={style.HeroSection}>
      <img src={bgimagee} className={style.BgImage}></img>
      <div className={style.textArea}>
        <p> Hey There!</p>
        <h1 className={style.mainHeading}>
          Decoding the Digital Universe: Unveiling Code Craftsmanship
        </h1>
      </div>
    </div>
  );
}

export default BgImage;
