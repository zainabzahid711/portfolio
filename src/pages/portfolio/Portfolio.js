import React from "react";
import { styled } from "@mui/material/styles";

import { Box } from "@mui/material";
import HeroSec from "../../components/HeroSection/HeroSec";
import ShowCaseCard from "../../components/showCaseCard/ShowCaseCard";
import SideProfile from "../../components/sideProfile/SideProfile";

const WorkPortfolio = styled(Box)(({ theme }) => ({
  gap: "90px",
  display: "flex",
  flexDirection: "column",
}));

const MainPort = styled(Box)(({ theme }) => ({
  position: "relative",
}));

function Portfolio() {
  return (
    <>
      <MainPort>
        <SideProfile top={40} />
        <HeroSec
          spanText={"Explore My Work!"}
          mainText="Discover the projects and designs that define my creative journey."
        />
        <WorkPortfolio>
          <ShowCaseCard />
        </WorkPortfolio>
      </MainPort>
    </>
  );
}

export default Portfolio;
