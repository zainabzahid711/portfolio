import React from "react";
import style from "./Input.module.css";
function Input({ type, placeholder, invalid, onChange }) {
  return (
    <>
      <div className={style.Input}>
        <input
          className={`${style.inputCont} ${invalid ? style.invalid : ""}`}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          required
        ></input>
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
