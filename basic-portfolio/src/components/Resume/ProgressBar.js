import style from "./Resume.module.css";
import React, { useEffect, useState } from "react";

const ProgressBar = ({ label, value }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById(label);
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < windowHeight && rect.bottom >= 0;

      if (isVisible) {
        setProgress(value);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [label, value]);
  return (
    <div className={style.progressBar}>
      <div
        className={style.progressBarFill}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
