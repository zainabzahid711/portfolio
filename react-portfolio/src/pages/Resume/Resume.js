import React from "react";
import style from "./Resume.module.css";
import HeroSec from "../../components/HeroSection/HeroSec";
import Skills from "../../components/SkillSection/Skills";
import Exprties from "../../components/Experties/Experties";
import Project from "../../components/Projects/Project";
import Footer from "../../components/footer/Footer";

function Resume() {
  return (
    <>
      {/* <div className={style.Resume}> */}
      <HeroSec mainText={"Discover my Skills and Project History!"} />
      <div className={style.ResumeContent}>
        <Skills />
        <Exprties />
        <Project />
        <Footer />
      </div>
      {/* </div> */}
    </>
  );
}

export default Resume;
