import React from "react";
import style from "./Input.module.css";
function Input() {
  const inputData = [
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Message" },
  ];

  return (
    <>
      <div className={style.Input}>
        {inputData.map((item, index) => (
          <input
            className={style.inputCont}
            key={index}
            type={item.type}
            placeholder={item.placeholder}
          ></input>
        ))}
      </div>
    </>
  );
}

export default Input;

// <input
// className={style.inputCont}
// type="text"
// placeholder="Name"
// ></input>
// <input
// className={style.inputCont}
// type="email"
// placeholder="Email"
// ></input>
// <input
// className={style.inputmsg}
// type="text"
// placeholder="Message"
// ></input>
