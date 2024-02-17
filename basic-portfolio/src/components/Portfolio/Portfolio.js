import React, { useState } from "react";
import style from "./Portfolio.module.css";
import Sidebar from "../SideBar/Sidebar";
import Header from "../header/Header";
import BgImage from "../bgImage/BgImage";
import Description from "../Description/Description";
import Services from "../Services/Services";
import Resume from "../Resume/Resume";

function Portfolio() {
  const [isResumeOpen, setResumeOpen] = useState(false);
  const [isHomeOpen, setHomeOpen] = useState(true);

  const toggleResume = () => {
    setResumeOpen(!isResumeOpen);
  };

  const toggleHome = () => {
    setHomeOpen(isHomeOpen);
    setResumeOpen(false);
  };
  return (
    <div className={style.Portfolio}>
      <Header toggleResume={toggleResume} toggleHome={toggleHome} />
      {!isResumeOpen && isHomeOpen && (
        <>
          <BgImage mainText="Decoding the Digital World: Revealing the Art of Coding" />
          <Sidebar />
          <Description />
          <Services />
        </>
      )}
      {isResumeOpen && <Resume />}
    </div>
  );
}

export default Portfolio;
