import React from "react";
import { styled } from "@mui/material/styles";

import { Box } from "@mui/material";
import { Container, Grid } from "@mui/material";
import HeroSec from "../../components/HeroSection/HeroSec";
import ShowCaseCard from "../../components/showCaseCard/ShowCaseCard";

const WorkPortfolio = styled(Box)(({ theme }) => ({
  gap: "90px",
  display: "flex",
  flexDirection: "column",
  // [theme.breakpoints.down("lg")]: {
  //   width: 400,
  // },
  // [theme.breakpoints.down("md")]: {
  //   // width: 700,
  // },
  // [theme.breakpoints.down("sm")]: {
  //   // width: 300,
  //   padding: "12px 0px 12px 0px",
  // },
}));

function Portfolio() {
  return (
    <>
      <HeroSec
        spanText={"Explore My Work!"}
        mainText="Discover the projects and designs that define my creative journey."
      />
      <WorkPortfolio>
        <ShowCaseCard />
      </WorkPortfolio>
      {/* <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ShowCaseCard
              imageSrc="https://via.placeholder.com/600x400"
              title="Sample Image 1"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ShowCaseCard
              imageSrc="https://via.placeholder.com/600x400"
              title="Sample Image 2"
            />
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
}

export default Portfolio;
