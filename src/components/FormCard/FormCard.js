import React, { useState, useEffect } from "react";
import style from "./FormCard.module.css";
import Input from "../Input/Input";
import AOS from "aos";
import "aos/dist/aos.css";

function FormCard() {
  const [aosInitialize, setInitialize] = useState(false);
  useEffect(() => {
    if (!aosInitialize) {
      AOS.init();
      setInitialize(true);
    }
  }, [aosInitialize]);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const emailNotValid = submit && !enteredEmail.includes("@");
  const nameNotValid = submit && enteredName.trim().length < 4;

  const inputArray = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      invalid: nameNotValid,
    },
    {
      name: "email",
      type: "text",
      placeholder: "Email",
      invalid: emailNotValid,
    },
  ];

  function handleInputchange(identifier, value) {
    if (identifier === "email") {
      setEmail(value);
    } else {
      setName(value);
    }
  }
  function handleLogin(event) {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <>
      <div
        className={style.contactDet}
        data-aos={aosInitialize ? "fade-up" : ""}
        data-aos-duration="2000"
      >
        {inputArray.map((field, index) => (
          <Input
            key={index}
            onChange={(event) =>
              handleInputchange(field.name, event.target.value)
            }
            invalid={field.invalid}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <textarea className={style.textField} placeholder="Message" />
        <div className={style.btnDiv}>
          <button type="submit" onClick={handleLogin} className={style.contBtn}>
            Send <span className={style.arrow}>&rarr;</span>
          </button>
          <span className={style.spanEle}>
            "I ensure the confidentiality of your personal information"
          </span>
        </div>
      </div>
    </>
  );
}

export default FormCard;
