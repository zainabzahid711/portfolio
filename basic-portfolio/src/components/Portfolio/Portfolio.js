import React, { useState } from "react";
import style from "./Portfolio.module.css";
import Sidebar from "../SideBar/Sidebar";
import Header from "../header/Header";
import BgImage from "../bgImage/BgImage";
import Description from "../Description/Description";
import Services from "../Services/Services";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";

function Portfolio() {
  const [isResumeOpen, setResumeOpen] = useState(false);
  const [isHomeOpen, setHomeOpen] = useState(true);
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleResume = () => {
    setResumeOpen(!isResumeOpen);
  };

  const toggleContact = () => {
    setContactOpen(!isContactOpen);
  };

  const toggleHome = () => {
    setHomeOpen(isHomeOpen);
    setResumeOpen(false);
  };
  return (
    <div className={style.Portfolio}>
      <Header
        toggleResume={toggleResume}
        toggleHome={toggleHome}
        toggleContact={toggleContact}
      />
      {!isResumeOpen && !isContactOpen && isHomeOpen && (
        <>
          <BgImage mainText="Decoding the Digital World: Revealing the Art of Coding" />
          <Sidebar />
          <Description />
          <Services />
        </>
      )}
      {isResumeOpen && !isContactOpen && <Resume />}
      {isContactOpen && <Contact />}
    </div>
  );
}

export default Portfolio;
