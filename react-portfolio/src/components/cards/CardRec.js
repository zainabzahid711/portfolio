import React from "react";
import style from "./CardRec.module.css";

function CardRec({ text }) {
  return (
    <>
      <div className={style.cardrectangle}>
        <div className={style.cardrecText}>{text}</div>
      </div>
    </>
  );
}

export default CardRec;
