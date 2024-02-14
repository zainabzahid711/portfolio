import React from "react";
import style from "./Sidebar.module.css";
import LinkdinLogo from "../../assets/svg/icons8-linkedin.svg";
import twitterLogo from "../../assets/svg/icons8-twitter.svg";
import mailLogo from "../../assets/svg/icons8-gmail.svg";

function Sidebar() {
  return (
    <>
      <div className={style.sideBar}>
        <h1 className={style.headingName}>ZAINAB ZAHID</h1>
        <p className={style.changingText}>I'M UI/UX DESIGNER</p>
        <div className={style.contactLinks}>
          <img className={style.logo} src={LinkdinLogo} />
          <img className={style.logo} src={twitterLogo} />
          <img className={style.logo} src={mailLogo} />
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
