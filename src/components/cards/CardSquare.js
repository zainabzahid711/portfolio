import React from "react";
import style from "./CardRec.module.css";

function CardSquare({ title, subTitle, span }) {
  return (
    <>
      <div className={style.CardSquare}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.subtitle}>{subTitle}</p>
        <span className={span}>{span}</span>
      </div>
    </>
  );
}
export default CardSquare;
