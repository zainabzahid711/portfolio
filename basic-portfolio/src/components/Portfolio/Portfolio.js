import React from "react";
import style from "./Portfolio.module.css";
import Sidebar from "../SideBar/Sidebar";
import Header from "../header/Header";
import BgImage from "../bgImage/BgImage";
import Description from "../Description/Description";

function Portfolio() {
  return (
    <div className={style.Portfolio}>
      <Header />
      <BgImage />
      <Sidebar />
      <Description />
    </div>
  );
}

export default Portfolio;
