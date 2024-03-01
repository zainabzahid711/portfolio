import React from "react";
import style from "./Experience.module.css";
import HeroSec from "../../components/HeroSection/HeroSec";
import CardRec from "../../components/cards/CardRec";
import Project from "../../components/Projects/Project";
import Footer from "../../components/footer/Footer";

function Experience() {
  return (
    <>
      <HeroSec mainText=" Discover My Experience! as Projects" />
      <div className={style.desption}>
        <h1 className={style.heading}> Working with Local Clients! </h1>
        <CardRec
          text="This experience has honed my skills in client management, requirements
          gathering, project planning, and execution. I have also gained a deep
          understanding of the local business landscape, cultural norms, and regulatory
          framework, which has helped me to deliver successful projects while
          maintaining strong relationships with my clients. Overall, working with local
          clients has been a rewarding experience that has enriched my professional
          career and broadened my horizons."
        />
      </div>
      <Project />
      <Footer />
    </>
  );
}

export default Experience;
