import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
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
      <div className={style.Footer}>
        <div className={style.footerinisde}>
          <div
            className={style.footerContent}
            data-aos={aosInitialize ? "fade-up" : ""}
            data-aos-duration="2000"
          >
            <p className={style.ftrText}> © 2024 ALL RIGHTS RESERVED. </p>
            <p className={style.ftrText}>
              DEVELOPED BY:
              <a href="https://themeforest.net/user/bslthemes">
                <span> BSLTHEMES </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
