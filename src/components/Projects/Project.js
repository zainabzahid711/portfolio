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
    date: "december 2022 - januray 2023",
    title: "EnvoyHealthCare",
    description:
      "Envoy HealthCare is a web project using HTML, CSS, and JavaScript. It features a doctor appointment booking system with an interactive interface for patients and providers. I designed and implemented responsive web pages and integrated data tools for optimal functionality. Collaborating closely with my project partner, this project enhanced my teamwork skills.",
  },
  {
    id: 2,
    date: "march 2023 ",
    title: "TrilloProject",
    description:
      "Trillo is a WEB Based project using HTML, CSS without using flex property. Credit goes to original author JONAS SCHMEDTMANN.",
  },
  {
    id: 3,
    date: "may 2023 - june 2023",
    title: "NatoursProject",
    description:
      "Natours Project is a WEB Based project using HTML, CSS/SASS. The project is centered around a SASS components. Credit goes to original author JONAS SCHMEDTMANN.",
  },
  {
    id: 4,
    date: "july 2023 - august 2023",
    title: "RentNation",
    description:
      "Rent Nation is a web-based project developed using React.js. The platform facilitates renting various products, including golf carts, beach supplies, and kayaks. My role involved designing and implementing web pages, as well as optimizing generic components. This project, my first task in React, enabled me to enhance my skills in both React development and project management.",
  },
  {
    id: 5,
    date: " september 2023 - october 2023",
    title: "Bolt",
    description:
      "Developed a cloud storage economy platform using Html Css. Key responsibilities included creating responsive web screens and resolving various UI issues to enhance user experience.",
  },
  {
    id: 6,
    date: " november 2023",
    title: "Quizz Master app",
    description:
      "The QuizMaster, made with React js, is a practical exercise in state management and frontend development. Users take timed quizzes, with React's useState hook handling dynamic elements like the progress bar. Results display skipped, correct, and incorrect answers, showcasing React js state management in action.",
  },
  {
    id: 7,
    date: "february 2024",
    title: "food Order app",
    description:
      "The Food Order App is a React.js-based application developed to streamline food ordering processes. It utilizes React's Context API and useReducer hook for efficient state management, ensuring smooth data flow throughout the application. The app enables users to add or remove items from their shopping cart, with real-time updates and accurate total amount calculation. A modal interface facilitates convenient interaction with the shopping cart. Additionally, the app integrates with a dummy backend for data storage and retrieval.",
  },

  {
    id: 8,
    date: "may 2024",
    title: "Axilliant Project",
    description:
      "This project was developed using HTML, CSS, and JavaScript. I have designed several of its screens and addressed various issues and glitches that were present. I ensured everything functions smoothly and fixed all the issues as required.",
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
