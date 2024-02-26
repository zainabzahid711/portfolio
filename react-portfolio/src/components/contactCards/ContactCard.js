import React from "react";
import style from "./ContactCard.module.css";

function ContactCard({ name, typeContact, detail, typeContact2, detail2 }) {
  return (
    <>
      <div className={style.ContactCard}>
        <h3 className={style.contactHeading}> {name} </h3>
        <div className={style.details}>
          <div className={style.resourse}>
            <p className={style.para}>{typeContact}</p>
            <span className={style.spanText}>{detail}</span>
          </div>
          <div className={style.resourse}>
            <p className={style.para}>{typeContact2}</p>
            <span className={style.spanText}>{detail2}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
