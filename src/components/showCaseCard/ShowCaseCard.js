import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import envoyDesktop from "../../assets/png/mainEnvoy.png";
import cardsDesktop from "../../assets/png/cardsDesign.png";
import mobile from "../../assets/png/envoyMobile1.jpg";
import {
  Box,
  Card,
  Modal,
  IconButton,
  CardMedia,
  Typography,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShowCard = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  padding: "24px 0px 24px 0px",
  position: "relative",
  width: "60%",
  maxWidth: "100%",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    width: "70%",
    left: "20%",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
    left: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70%",
    left: "60%",
  },
}));

const CardContainer = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  height: "295px",
  width: "400px",
  textAlign: "center",
  background: "#00283a",
  color: "white",
  fontWeight: 800,
  borderRadius: "13px",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  "&:hover .hover-content": {
    background: "#00283a",
    width: "100%",
    padding: "10px",
    opacity: 1,
  },
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
  height: "100%",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const HoverBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  //   width: "400px",
  //   height: "295px",
  background: "rgba(0, 40, 58, 0.8)",
  color: "white",
  opacity: 0,
  transition: "opacity 0.3s",
}));

const ShowCaseCard = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const images = [envoyDesktop, cardsDesktop, mobile];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Box>
        <ShowCard>
          <CardContainer onClick={handleClickOpen}>
            <CardImage
              className="iamge"
              component="img"
              image={envoyDesktop}
              alt="project-img"
            />
            <HoverBox className="hover-content">
              <Typography variant="h5">Envoy Health Care</Typography>
            </HoverBox>
          </CardContainer>
        </ShowCard>
      </Box>

      <Modal
        BackdropComponent={(props) => (
          <Backdrop
            {...props}
            sx={{
              backgroundColor: "rgb(0,0,0,0.8)",
              backdropFilter: "blur(0px)",
            }}
          />
        )}
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(0px)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "290px",
            // bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 5,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "text.primary",
            }}
          >
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 10,
              color: "text-primary",
            }}
          >
            <ArrowBackIosIcon style={{ color: "white" }} />
          </IconButton>
          <img
            src={images[currentIndex]}
            alt="project-img"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              transition: "transform 1s ease-in-out",
            }}
          />
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 10,
              color: "text.primary",
            }}
          >
            <ArrowForwardIosIcon style={{ color: "white" }} />
          </IconButton>
          {/* <ReactImageGallery items={images} /> */}
        </Box>
      </Modal>
    </>
  );
};

export default ShowCaseCard;
