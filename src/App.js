import React from "react";

import Home from "./pages/Home/Home";
import NavBar from "./components/navbar/NavBar";
import SideProfile from "./components/sideProfile/SideProfile";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Experience from "./pages/Experiance/Experience";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
