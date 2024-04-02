import React, { useState, useEffect } from "react";
import style from "./Skills.module.css";
import CardSkill from "../cards/CardSkill";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
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
  const skills = [
    { SkillName: "Urdu", perValue: 100 },
    { SkillName: "English", perValue: 70 },
  ];

  const ProSkill = [
    { SkillName: "C++", perValue: 95 },
    { SkillName: "HTML", perValue: 95 },
    { SkillName: "CSS/SASS", perValue: 95 },
    { SkillName: "BOOTSTRAP", perValue: 50 },
    { SkillName: "REACT.JS", perValue: 80 },
    { SkillName: "JAVASCRIPT", perValue: 60 },
  ];
  const chunkArray = [];
  for (let i = 0; i < ProSkill.length; i += 2) {
    chunkArray.push(ProSkill.slice(i, i + 2));
  }
  return (
    <>
      <div className={style.allSkilss}>
        <div
          className={style.langSkills}
          data-aos={aosInitialize ? "fade-up" : ""}
          data-aos-duration="2000"
        >
          {skills.map((item, idx) => (
            <CardSkill
              key={idx}
              SkillName={item.SkillName}
              perValue={item.perValue}
            />
          ))}
        </div>
        {chunkArray.map((chunk, index) => (
          <>
            {/* <div className={style.subSkills}> */}
            <div
              key={index}
              className={style.proSkills}
              data-aos={aosInitialize ? "fade-up" : ""}
              data-aos-duration="2000"
            >
              {chunk.map((item, idx) => (
                <CardSkill
                  key={idx}
                  SkillName={item.SkillName}
                  perValue={item.perValue}
                />
              ))}
            </div>
            {/* </div> */}
          </>
        ))}
      </div>
    </>
  );
}

export default Skills;
