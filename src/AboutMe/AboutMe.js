import React, { useState, useEffect } from "react";
// import './AboutMe.scss'
import svgAbout from "../img/svgAbout.svg";
import { About } from "./AboutMe.css";
const AboutMe = () => {
  useEffect(() => {
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
    const classOfAbout = (<About />).type.styledComponentId;
    const vh = window.innerHeight;
    const aboutPosition =
      document.querySelector(`.${classOfAbout}`).offsetTop - 0.8 * vh;
    if (window.scrollY > aboutPosition) {
      setShow(true);
    }
  }
  return (
    <About show={show}>
      <header>
        <h1>About me</h1>
      </header>
      <section>
        <img src={svgAbout} alt="svgAbout" />
        <p>
          {" "}
          Hi, my name is Sebastian. i'm an enginerr of Automatics and Robotics
          and now i'm finishing a master's degree. In my studies i had contact
          with many programming languages, but they are not used in
          web-development. It allowed me to learn the rules of coding and many
          aspects of their use. When i started learning front-end, i liked it
          very much. I would like to do this in the future and increase my
          competences.
        </p>
      </section>
    </About>
  );
};

export default AboutMe;
