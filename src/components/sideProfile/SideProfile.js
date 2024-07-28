import React, { useEffect, useState } from "react";
import style from "./SideProfile.module.css";

import LinkdinLogo from "../../assets/svg/icons8-linkedin.svg";
import twitterLogo from "../../assets/svg/icons8-twitter.svg";
import mailLogo from "../../assets/svg/icons8-gmail.svg";
import gitHubLogo from "../../assets/svg/icons8-github.svg";

function SideProfile({ top }) {
  const sidebarStyle = {
    top: top ? `${top}%` : "auto",
  };
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
  }, [Text.length]);

  return (
    <>
      <div className={style.sideBar} style={sidebarStyle}>
        <h1 className={style.headingName}>ZAINAB ZAHID</h1>
        <p className={style.changingText}>{Text[index]}</p>
        <div className={style.contactLinks}>
          <a href="https://github.com/zainabzahid711">
            <img className={style.logo} src={gitHubLogo} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/zainab-zahid-b18428240/">
            <img className={style.logo} src={LinkdinLogo} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/ZainabZahid09">
            <img className={style.logo} src={twitterLogo} alt="Twitter" />
          </a>
          <a href="mailto:zynabzahid877@gmail.com">
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

export default SideProfile;
