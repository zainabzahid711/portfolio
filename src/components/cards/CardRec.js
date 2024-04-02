import React, { useState, useEffect } from "react";
import style from "./CardRec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CardRec({ text }) {
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
        className={style.cardrectangle}
        data-aos={aosInitialize ? "fade-up" : ""}
        data-aos-duration="2000"
      >
        <div className={style.cardrecText}>{text}</div>
      </div>
    </>
  );
}

export default CardRec;
