import React from "react";
import Home from "../Home/Home";
import NavBar from "../../components/navbar/NavBar";
import SideProfile from "../../components/sideProfile/SideProfile";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Experience from "../Experiance/Experience";

function Portfolio() {
  return (
    <>
      <NavBar />
      <SideProfile />
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Resume /> */}
      <Experience />
    </>
  );
}

export default Portfolio;
