import React from "react";
import Home from "../Home/Home";
import NavBar from "../../components/navbar/NavBar";
import SideProfile from "../../components/sideProfile/SideProfile";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Experience from "../Experiance/Experience";
import { Routes, Route } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <NavBar />
      <SideProfile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Portfolio;
