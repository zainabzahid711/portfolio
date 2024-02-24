import React from "react";
import HeroSec from "../../components/HeroSection/HeroSec";
import style from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={style.HomePage}>
        <HeroSec />
      </div>
    </>
  );
}
export default Home;
