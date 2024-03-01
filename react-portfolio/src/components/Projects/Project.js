import React from "react";
import style from "./Project.module.css";
// import timeLineElements from "./timeLineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineElements = [
  {
    id: 1,
    date: "march 2023 - april 2023",
    title: "EnvoyHealthCare",
    description:
      "Envoy HealthCare is a web project using HTML, CSS, and JavaScript. The project is centered around a doctor appointment booking system with an interactive interface for patients and healthcare providers. My main responsibilities included designing and implementing responsive web pages and integrating data tools for optimal functionality. I collaborated closely with my project mate to ensure successful project completion. This project allowed me to hone my skills in web development and project management.",
  },
  {
    id: 2,
    date: "september 2023 - november 2023",
    title: "RentNation",
    description:
      "RentNation is a WEB Based project using React.js, HTML/CSS, and JS. The project is centered around a Beache appointments booking system including Golf cards, Beache Supplies and Kayaks for Rent with an interactive interface for cards. My main responsibilities included designing and implementing web pages and integrating data tools for optimal functionality. This project allowed me to sharp my skills in react journey and project management.",
  },
  {
    id: 3,
    date: " november 2023 - december 2023",
    title: "Bolt",
    description:
      " Bolt is a WEB Based project using HTML, CSS/SASS. The project is centered around a Cloud Storage Economy system including Swap to ZCN, Swap on Blobber and Transect with split-key, with an interactive interface for Bolt tokens.",
  },
  {
    id: 4,
    date: "august 2023 - september 2023",
    title: "NatoursProject",
    description:
      "Natours Project is a WEB Based project using HTML, CSS/SASS. The project is centered around a SASS components. Credit goes to original author JONAS SCHMEDTMANN.",
  },
  {
    id: 5,
    date: "july 2023 - august 2023",
    title: "TrilloProject",
    description:
      "Trillo is a WEB Based project using HTML, CSS without using flex property. Credit goes to original author JONAS SCHMEDTMANN.",
  },
];

function Project() {
  return (
    <>
      <div className={style.Projects}>
        <VerticalTimeline lineColor="#00283a" className={style.verticalLine}>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName={style.date}
                className={style.verticalElement}
                contentStyle={{ background: "#00283a", borderRadius: "10px" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #Fdfaf4",
                }}
                iconStyle={{
                  backgroundColor: "#00283a",
                  color: "#00283a",
                  width: "40px",
                  height: "40px",
                  marginLeft: "-20px",
                }}
                iconClassName={style.customIcon}
              >
                <h3 className={style.timelineTitle}> {element.title}</h3>
                <p className={style.timelineSubtitle}>{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
}
export default Project;
