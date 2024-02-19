import React, { useEffect, useState, useRef } from "react";
import style from "./Sidebar.module.css";
import LinkdinLogo from "../../assets/svg/icons8-linkedin.svg";
import twitterLogo from "../../assets/svg/icons8-twitter.svg";
import mailLogo from "../../assets/svg/icons8-gmail.svg";

function Sidebar() {
  const Text = [
    "I'M A DEVELOPER. ",
    "I'M A UI/UX DESIGNER.",
    "I'M A DREAMER :) ",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Text.length);
    }, 2000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div className={style.sideBar}>
        <h1 className={style.headingName}>ZAINAB ZAHID</h1>
        {/* <p className={style.changingText}>{Text[index]}</p> */}
        <div className={style.contactLinks}>
          <a
            href="https://www.linkedin.com/in/zainab-zahid-b18428240/"
            target="_blank"
          >
            <img className={style.logo} src={LinkdinLogo} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/ZainabZahid09" target="_blank">
            <img className={style.logo} src={twitterLogo} alt="Twitter" />
          </a>
          <a href="mailto:zynabzahid877@gmail.com" target="_blank">
            <img className={style.logo} src={mailLogo} alt="Email" />
          </a>
        </div>
        <div className={style.genInfo}>
          <div className={style.detailInfo}>
            <p> Education: </p>
            <p> Becholers </p>
          </div>
          <div className={style.detailInfo}>
            <p> Residance: </p>
            <p> Lahore, Pakistan </p>
          </div>
          <div className={style.detailInfo}>
            <p> Work: </p>
            <p> As a developer </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
