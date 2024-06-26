import style from "./ProgressBar.module.css";
import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ value, progress }) => {
  // const calculatedProgress = (progress / 100) * value;
  return (
    <div className={style.progressBar}>
      <motion.div
        className={style.progressBarFill}
        animate={{
          width: `${value}%`,
        }}
        transition={{
          duration: 2,
        }}
      />
      <div className={style.percentage}></div>
    </div>
  );
};

export default ProgressBar;
