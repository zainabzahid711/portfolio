import React from "react";
import style from "./CardRec.module.css";
import ProgressBar from "../progressBar/ProgressBar";

function CardSkill({ SkillName, perValue, progress }) {
  return (
    <>
      <div className={style.langContain}>
        <div className={style.spanDiv}>
          <h4>{SkillName}</h4>
          <span className={style.spanElem}>{perValue}%</span>
        </div>
        <ProgressBar value={perValue} progress={progress} />
      </div>
    </>
  );
}

export default CardSkill;
