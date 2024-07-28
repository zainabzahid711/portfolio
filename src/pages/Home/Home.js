import React from "react";
import HeroSec from "../../components/HeroSection/HeroSec";
import style from "./Home.module.css";
import CardRec from "../../components/cards/CardRec";
import Services from "../../components/Services/Services";
import Footer from "../../components/footer/Footer";
import SideProfile from "../../components/sideProfile/SideProfile";

function Home() {
  return (
    <>
      <div className={style.HomePage}>
        <SideProfile top={16} />
        <HeroSec
          spanText={"Hey There!"}
          mainText=" Decoding the Digital Universe: Discover my space!"
        />
        <div className={style.desption}>
          <h1 className={style.heading}> Description</h1>
          <CardRec
            text="Experienced coder adept at crafting efficient, scalable, and
            user-friendly software solutions across diverse platforms and
            industries."
          />
        </div>
        <Services />
        <Footer />
      </div>
    </>
  );
}
export default Home;
