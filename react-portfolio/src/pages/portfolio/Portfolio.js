import React from "react";
import Home from "../Home/Home";
import NavBar from "../../components/navbar/NavBar";
import SideProfile from "../../components/sideProfile/SideProfile";
import Contact from "../Contact/Contact";

function Portfolio() {
  return (
    <>
      <NavBar />
      <SideProfile />
      {/* <Home /> */}
      <Contact />
    </>
  );
}

export default Portfolio;
