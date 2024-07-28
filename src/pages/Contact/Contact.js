import React from "react";
import style from "./Contact.module.css";
import HeroSec from "../../components/HeroSection/HeroSec";
import ContactCard from "../../components/contactCards/ContactCard";
import Footer from "../../components/footer/Footer";
import FormCard from "../../components/FormCard/FormCard";
import SideProfile from "../../components/sideProfile/SideProfile";
import { useMediaQuery } from "@mui/material";

function Contact() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const arry = [
    {
      name: "Call",
      typeContact: "Work:",
      detail: "+923134807380",
      typeContact2: "Professional:",
      detail2: "+923134807380",
    },
    {
      name: "Wright",
      typeContact: "Email:",
      detail: "zynabzahid@gmail.com",
      typeContact2: "Twitter:",
      detail2: "zainabzahid09",
    },
  ];
  return (
    <div className={style.Contact}>
      <SideProfile top={isMobile ? 15 : 20} />
      <HeroSec
        spanText={"Contact me!"}
        mainText={"Want to Hire! Let's Get In touch!"}
      />
      <div className={style.ContactCards}>
        {arry.map((item, index) => (
          <ContactCard
            key={index}
            name={item.name}
            typeContact={item.typeContact}
            detail={item.detail}
            typeContact2={item.typeContact2}
            detail2={item.detail2}
          />
        ))}
      </div>
      <FormCard />
      <Footer />
    </div>
  );
}

export default Contact;
