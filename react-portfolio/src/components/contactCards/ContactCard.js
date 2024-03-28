import React, { useEffect, useState } from "react";
import style from "./ContactCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactCard({ name, typeContact, detail, typeContact2, detail2 }) {
  const [aosInitialize, setInitialize] = useState(false);
  useEffect(() => {
    if (!aosInitialize) {
      AOS.init();
      setInitialize(true);
    }
  }, [aosInitialize]);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div
        className={style.ContactCard}
        data-aos={aosInitialize ? "fade-up" : ""}
        data-aos-duration="2000"
      >
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
