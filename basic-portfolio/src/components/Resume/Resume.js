import React from "react";
import style from "./Resume.module.css";
import bgimagee from "../../assets/png/pexels-photo-2653362.jpeg";
import Sidebar from "../SideBar/Sidebar";
import BgImage from "../bgImage/BgImage";
import ProgressBar from "./ProgressBar";

function Resume() {
  return (
    <>
      <Sidebar />
      <BgImage mainText="Discover My Skills and Experiance" />
      <div className={style.LangSkill}>
        <div className={style.subLangdivs}>
          <div className={style.langContain}>
            <div className={style.spanDiv}>
              <h4> Urdu </h4>
              <span> Native </span>
            </div>
            <ProgressBar label="Urdu" value={100} />
          </div>
          <div className={style.langContain}>
            <div className={style.spanDiv}>
              <h4> English </h4>
              <span> 70% </span>
            </div>
            <div className={style.progressBarContainer}>
              <div className={style.progressBar}>
                <div className={style.progressBarFill}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.subLangdivs}>
          <div className={style.langContain}>
            <div className={style.spanDiv}>
              <h4> C++ </h4>
              <span> 95% </span>
            </div>
            <div className={style.progressBarContainer}>
              <div className={style.progressBar}>
                <div className={style.progressBarFill}></div>
              </div>
            </div>
            <div className={style.spanDiv}>
              <h4> HTML </h4>
              <span> 90% </span>
            </div>
            <div className={style.progressBarContainer}>
              <div className={style.progressBar}>
                <div className={style.progressBarFill}></div>
              </div>
            </div>
            <div className={style.spanDiv}>
              <h4> CSS/SASS </h4>
              <span> 90% </span>
            </div>
            <div className={style.progressBarContainer}>
              <div className={style.progressBar}>
                <div className={style.progressBarFill}></div>
              </div>
            </div>
          </div>
          <div className={style.langContain}>
            <div className={style.spanDiv}>
              <h4> BOOTSTRAP </h4>
              <span> 70% </span>
            </div>
            <div className={style.progressBarContainer}>
              <div className={style.progressBar}>
                <div className={style.progressBarFill}></div>
              </div>
            </div>
            <div className={style.spanDiv}>
              <h4> REACT.JS </h4>
              <span> 60% </span>
            </div>
            <div className={style.progressBarContainer}>
              <div className={style.progressBar}>
                <div className={style.progressBarFill}></div>
              </div>
            </div>
            <div className={style.spanDiv}>
              <h4> JAVASCRIPT </h4>
              <span> 60% </span>
            </div>
            <div className={style.progressBarContainer}>
              <div className={style.progressBar}>
                <div className={style.progressBarFill}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
