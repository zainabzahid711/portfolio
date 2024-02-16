import React from "react";
import style from "./Description.module.css";
function Description() {
  return (
    <>
      <div className={style.Description}>
        <div className={style.descText}>
          <h3 className={style.desHeading}> Description </h3>
        </div>
        <div className={style.desContent}>
          <p>
            Experienced coder adept at crafting efficient, scalable, and
            user-friendly software solutions across diverse platforms and
            industries."
          </p>
        </div>
      </div>
      <div className={style.Footer}>
        <div className={style.footerinisde}>
          <div className={style.footerContent}>
            <p className={style.ftrText}> © 2024 ALL RIGHTS RESERVED. </p>
            <p className={style.ftrText}> DEVELOPED BY: BSLTHEMES </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
