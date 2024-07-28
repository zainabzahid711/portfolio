import React from "react";
import style from "./Resume.module.css";
import HeroSec from "../../components/HeroSection/HeroSec";
import Skills from "../../components/SkillSection/Skills";
import Exprties from "../../components/Experties/Experties";
import Project from "../../components/Projects/Project";
import Footer from "../../components/footer/Footer";
import SideProfile from "../../components/sideProfile/SideProfile";

function Resume() {
  return (
    <>
      <div className={style.ResumeContent}>
        <SideProfile top={7} />
        <HeroSec
          spanText={"Resume!"}
          mainText={"Discover my Skills and Project History!"}
        />
        <Skills />
        <Exprties />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default Resume;
