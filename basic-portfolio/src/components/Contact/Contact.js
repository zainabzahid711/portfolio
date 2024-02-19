import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import BgImage from "../bgImage/BgImage";
import style from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMsg] = useState("");
  const handleNameChnage = (e) => {
    setName(e.target.value);
  };
  const handleMailChnage = (e) => {
    setMail(e.target.value);
  };
  const handleMsgChnage = (e) => {
    setMsg(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/send-message", {
        method: "POST",
        body: JSON.stringify({ name, mail, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Reset the form
      setName("");
      setMail("");
      setMsg("");
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <BgImage mainText="Have a question: Let's get in touch" />
      <div className={style.contact}>
        <div className={style.contactInside}>
          <div className={style.contactVia}>
            <h5 className={style.contHeading}> Call </h5>
            <p className={style.contPara}>
              <span> WORK: +92 313 480 7380</span>
              <span> PERSONAL: +92 313 480 7380</span>
            </p>
          </div>
          <div className={style.contactVia}>
            <h5 className={style.contHeading}> Wright </h5>
            <p className={style.contPara}>
              <span> MAIL: zynabzahid@gmail.com </span>
              <span> TWITTER: ZainabZahid09 </span>
            </p>
          </div>
        </div>
        <div className={style.contactSec}>
          <div className={style.contText}>
            <h3 className={style.getIntouch}> GET IN TOUCH </h3>
          </div>
          <div className={style.contactDet}>
            <input
              className={style.inputCont}
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChnage}
            ></input>
            <input
              className={style.inputCont}
              type="email"
              placeholder="Email"
              value={mail}
              onChange={handleMailChnage}
            ></input>
            <input
              className={style.inputmsg}
              type="text"
              placeholder="Message"
              value={message}
              onChange={handleMsgChnage}
            ></input>
            <div className={style.btnDiv}>
              <button className={style.contBtn} onClick={handleSubmit}>
                Send <span className={style.arrow}>&rarr;</span>
              </button>
              <span className={style.spanEle}>
                " I ensure the confidentiality of your personal information"
              </span>
            </div>
          </div>
        </div>
        <div className={style.Footer}>
          <div className={style.footerinisde}>
            <div className={style.footerContent}>
              <p className={style.ftrText}> © 2024 ALL RIGHTS RESERVED. </p>
              <p className={style.ftrText}>
                DEVELOPED BY:
                <a
                  href="https://themeforest.net/user/bslthemes"
                  target="_blank"
                >
                  <span> BSLTHEMES </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
