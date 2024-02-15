import React from "react";
import style from "./Description.module.css";
function Description() {
  return (
    <div className={style.Description}>
      <h3 className={style.desHeading}> Description </h3>
      <div className={style.desContent}>
        <p>
          Experienced coder adept at crafting efficient, scalable, and
          user-friendly software solutions across diverse platforms and
          industries."
        </p>
      </div>
    </div>
  );
}

export default Description;
