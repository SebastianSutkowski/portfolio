import React, { useState, useEffect } from "react";
import { Skills } from "./MySkills.css";
import svgSkills from "../img/svgSkills.svg";
const icons = [
  {
    color: "#f34f29",
    class: "fab fa-git-alt",
    description: "Git",
  },
  {
    color: "#61dbfb",
    class: "fab fa-react",
    description: "React",
  },
  {
    color: "#f0db4f",
    class: "fab fa-js-square",
    description: "Java- Script",
  },
  {
    color: "#F16529",
    class: "fab fa-html5",
    description: "HTML",
  },
  {
    color: "#264de4",
    class: "fab fa-css3-alt",
    description: "CSS",
  },
  {
    color: "#cc6699",
    class: "fab fa-sass",
    description: "SASS",
  },
];
const MySkills = () => {
  useEffect(() => {
    console.log(show);
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  const [show, setShow] = useState(false);
  function logit() {
    const classOfSkills = (<Skills />).type.styledComponentId;
    const vh = window.innerHeight;
    const skillsPosition =
      document.querySelector(`.${classOfSkills}`).offsetTop - 0.8 * vh;
    if (window.scrollY > skillsPosition) {
      setShow(true);
    }
  }
  return (
    <Skills show={show}>
      <header>
        <h1>My Skills</h1>
      </header>
      <section>
        <div>
          {icons.map((icon) => {
            return (
              <div key={icon.description}>
                <i style={{ color: icon.color }} className={icon.class}></i>
                <p>{icon.description}</p>
              </div>
            );
          })}
        </div>
        <img src={svgSkills} alt="svgSkills" />
      </section>
    </Skills>
  );
};

export default MySkills;
