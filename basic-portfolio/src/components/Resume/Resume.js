import React, { useEffect, useState, useRef } from "react";
import style from "./Resume.module.css";
import Sidebar from "../SideBar/Sidebar";
import BgImage from "../bgImage/BgImage";
import ProgressBar from "./ProgressBar";
import AOS from "aos";
import "aos/dist/aos.css";

function Resume() {
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const id = setProgress;
  // }, []);

  const [aosInitialize, setInitialize] = useState(false);
  useEffect(() => {
    if (!aosInitialize) {
      AOS.init();
      setInitialize(true);
    }
  }, [aosInitialize]);
  // array
  const Languages = [
    { id: "urdu", name: "Urdu", value: 100 },
    { id: "english", name: "English", value: 70 },
  ];
  const Skills = [
    { id: "c++", name: "C++", value: 95 },
    { id: "html", name: "HTML", value: 90 },
    { id: "css", name: "CSS/SASS", value: 90 },
  ];
  const skills2 = [
    { id: "bootstrap", name: "BOOTSTRAP", value: 60 },
    { id: "react", name: "REACT.JS", value: 60 },
    { id: "javascript", name: "JAVASCRIPT", value: 50 },
  ];

  return (
    <>
      <Sidebar />
      <BgImage mainText="Discover My Skills and Experiance" />
      <div className={style.LangSkill}>
        <div className={style.subLangdivs}>
          {Languages.map((item) => (
            <div className={style.langContain} key={item.id}>
              <div className={style.spanDiv}>
                <h4 id={item.id}>{item.name}</h4>
                <span className={style.spanElem}>{item.value}%</span>
              </div>
              <ProgressBar value={item.value} progress={progress} />
            </div>
          ))}
        </div>
        <div className={style.knowSkills}>
          <div className={style.subSkilldivs}>
            {Skills.map((item) => (
              <div className={style.skillContain}>
                <div className={style.spanDiv}>
                  <h4 id={item.id}>{item.name}</h4>
                  <span className={style.spanElem}>{item.value}%</span>
                </div>
                <ProgressBar value={item.value} progress={progress} />
              </div>
            ))}
          </div>
          <div className={style.subSkilldivs}>
            {skills2.map((item) => (
              <div className={style.skillContain}>
                <div className={style.spanDiv}>
                  <h4 id={item.id}>{item.name}</h4>
                  <span className={style.spanElem}>{item.value}%</span>
                </div>
                <ProgressBar value={item.value} progress={progress} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.Knowlwdge}>
        <div className={style.knowText}>
          <h3 className={style.knowHeading}> EXPERTIES </h3>
        </div>
        <div className={style.knowContent}>
          <div className={style.knowItems}>
            <ul>
              <li> Figma </li>
              <li> UI DESIGN </li>
              <li> Responsiveness </li>
            </ul>
            <ul>
              <li> Node.js </li>
              <li> Git/GitHub </li>
              <li> Js </li>
            </ul>
            <ul>
              <li> ProblemSolving </li>
              <li> OOP </li>
              <li> DataStructurs </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.projectHist}>
        <div className={style.knowText}>
          <h3 className={style.knowHeading}> Projects History </h3>
        </div>
        <div className={style.projContent}>
          <div
            className={style.leftContent}
            data-aos={aosInitialize ? "fade-up" : ""}
          >
            <div
              className={style.project1}
              data-aos={aosInitialize ? "fade-up" : ""}
            >
              <h4> Envoy Health Care </h4>
              <span className={style.spanElem}> march 2023 - april 2023 </span>
              <p className={style.ProjPara}>
                Envoy HealthCare is a web project using HTML, CSS, and
                JavaScript. The project is centered around a doctor appointment
                booking system with an interactive interface for patients and
                healthcare providers. My main responsibilities included
                designing and implementing responsive web pages and integrating
                data tools for optimal functionality. I collaborated closely
                with my project mate to ensure successful project completion.
                This project allowed me to hone my skills in web development and
                project management.
              </p>
            </div>
            <div
              className={style.project1}
              data-aos={aosInitialize ? "fade-up" : ""}
            >
              <h4> RentNation </h4>
              <span className={style.spanElem}>
                september 2023 - november 2023
              </span>
              <p className={style.ProjPara}>
                RentNation is a WEB Based project using React.js, HTML/CSS, and
                JS. The project is centered around a Beache appointments booking
                system including Golf cards, Beache Supplies and Kayaks for Rent
                with an interactive interface for cards. My main
                responsibilities included designing and implementing web pages
                and integrating data tools for optimal functionality. This
                project allowed me to sharp my skills in react journey and
                project management.
              </p>
            </div>
          </div>
          <div
            className={style.rightContent}
            data-aos={aosInitialize ? "fade-up" : ""}
          >
            <div
              className={style.project1}
              data-aos={aosInitialize ? "fade-up" : ""}
            >
              <h4> Bolt </h4>
              <span className={style.spanElem}>
                november 2023 - december 2023
              </span>
              <p className={style.ProjPara}>
                Bolt is a WEB Based project using HTML, CSS/SASS. The project is
                centered around a Cloud Storage Economy system including Swap to
                ZCN, Swap on Blobber and Transect with split-key, with an
                interactive interface for Bolt tokens.
              </p>
            </div>
            <div
              className={style.project1}
              data-aos={aosInitialize ? "fade-up" : ""}
            >
              <h4> NatoursProject </h4>
              <span className={style.spanElem}>
                august 2023 - september 2023
              </span>
              <p className={style.ProjPara}>
                Natours Project is a WEB Based project using HTML, CSS/SASS. The
                project is centered around a SASS components. Credit goes to
                original author JONAS SCHMEDTMANN.
              </p>
            </div>
            <div
              className={style.project1}
              data-aos={aosInitialize ? "fade-up" : ""}
            >
              <h4> TrilloProject </h4>
              <span className={style.spanElem}>july 2023 - august 2023</span>
              <p className={style.ProjPara}>
                Trillo is a WEB Based project using HTML, CSS without using flex
                property. Credit goes to original author JONAS SCHMEDTMANN.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Footer} data-aos={aosInitialize ? "fade-up" : ""}>
        <div className={style.footerinisde}>
          <div className={style.footerContent}>
            <p className={style.ftrText}> © 2024 ALL RIGHTS RESERVED. </p>
            <p className={style.ftrText}>
              DEVELOPED BY:
              <a href="https://themeforest.net/user/bslthemes" target="_blank">
                <span> BSLTHEMES </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
