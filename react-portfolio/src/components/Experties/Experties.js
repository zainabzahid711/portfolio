import React, { useState, useEffect } from "react";
import style from "./Experties.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Exprties() {
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
  const items = [
    "Figma",
    "UI DESIGN",
    "Responsiveness",
    "Node.js",
    "Git/GitHub",
    "Js",
    "DataStructure",
    "OOP",
    "ProblemSolving",
  ];

  return (
    <>
      <div className={style.Knowlwdge}>
        <div className={style.knowText}>
          <h3 className={style.knowHeading}> EXPERTIES </h3>
        </div>
        <div
          className={style.knowContent}
          data-aos={aosInitialize ? "fade-up" : ""}
          data-aos-duration="2000"
        >
          <div className={style.knowItems}>
            <ul className={style.list}>
              {items.map((item, index) => (
                <li className={style.itemss} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exprties;
