import React from "react";
import style from "./Services.module.css";

function Services() {
  return (
    <div id="Services" className={style.mainServices}>
      <div className={style.mainTextservice}>
        <h3 className={style.ServiceHeading}> Services </h3>
      </div>
      <div className={style.subServ2}>
        <div className={style.subServic}>
          <h5 className={style.subserHeading}> UI/UX Design </h5>
          <p className={style.servicePara}>
            This includes creating wireframes, mockups, and prototypes for
            websites and web applications. Also offer UI/UX audits to help.
          </p>
        </div>
        <div className={style.subServic}>
          <h5 className={style.subserHeading}> Web Development </h5>
          <p className={style.servicePara}>
            This includes building web applications using React for the frontend
            and Node.js. Also offer services such as authentication and
            deployment.
          </p>
        </div>
      </div>
      <div className={style.subServ2}>
        <div className={style.subServic}>
          <h5 className={style.subserHeading}> Performance Optimization </h5>
          <p className={style.servicePara}>
            This includes optimizing the performance of websites and web
            applications to improve speed, responsiveness, and user experience.
          </p>
        </div>
        <div className={style.subServic}>
          <h5 className={style.subserHeading}> Serverless Architecture </h5>
          <p className={style.servicePara}>
            This includes building serverless applications using platforms such
            as AWS Lambda, Azure Functions, and Google Cloud Functions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
