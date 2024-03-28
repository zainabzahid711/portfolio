import React, { useState, useEffect } from "react";
import style from "./Services.module.css";
import CardSquare from "../cards/CardSquare";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
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
  const dataArry = [
    {
      heading: "UI/UX Design",
      para: "This includes creating wireframes, mockups, and prototypes of websites and web applications. Also offer UI/UX audits to help.",
    },
    {
      heading: "Front-end",
      para: "This includes building web applications using React for the frontend and Node.js. Also offer services such as authentication and deployment.",
    },
    {
      heading: "Performance Optimization",
      para: "This includes optimizing the performance of websites and web applications to improve speed, responsiveness, and user experience.",
    },
    {
      heading: "Serverless Architecture",
      para: " This includes building serverless applications using platforms such as AWS Lambda, Azure Functions, and Google Cloud Functions.",
    },
  ];

  const chunkDataArry = [];
  for (let i = 0; i < dataArry.length; i += 2) {
    chunkDataArry.push(dataArry.slice(i, i + 2));
  }

  return (
    <div id="Services" className={style.mainServices}>
      <div className={style.mainTextservice}>
        <h3 className={style.ServiceHeading}> Services </h3>
      </div>
      {chunkDataArry.map((chunk, index) => (
        <>
          <div
            key={index}
            className={style.subService}
            data-aos={aosInitialize ? "fade-up" : ""}
            data-aos-duration="2000"
          >
            {chunk.map((data, idx) => (
              <CardSquare key={idx} title={data.heading} subTitle={data.para} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default Services;
