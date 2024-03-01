import React from "react";
import style from "./Experties.module.css";

function Exprties() {
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
        <div className={style.knowContent}>
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
