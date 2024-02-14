import React from "react";
import style from "./Portfolio.module.css";
import Sidebar from "../SideBar/Sidebar";
import Header from "../header/Header";

function Portfolio() {
  return (
    <div className={style.Portfolio}>
      <Header />
      <Sidebar />
    </div>
  );
}

export default Portfolio;
