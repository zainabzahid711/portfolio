import React from "react";
import style from "./FormCard.module.css";
import Input from "../Input/Input";

function FormCard() {
  return (
    <>
      <div className={style.contactDet}>
        <Input />
        <div className={style.btnDiv}>
          <button className={style.contBtn}>
            Send <span className={style.arrow}>&rarr;</span>
          </button>
          <span className={style.spanEle}>
            "I ensure the confidentiality of your personal information"
          </span>
        </div>
      </div>
    </>
  );
}

export default FormCard;
