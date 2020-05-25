import React, { useEffect, useState } from "react";
import { Navpanel } from "./Navigation.css";
// import './Nav.scss'
import { Works } from "../MyWorks/MyWorks.css";
import { Main } from "../Home/Home.css";
import { About } from "../AboutMe/AboutMe.css";
import { Skills } from "../MySkills/MySkills.css";
import { ContactSection } from "../Contact/Contact.css";

const Navigation = (props) => {
  // console.log(props)
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  function logit() {
    setScrollY(window.pageYOffset);

    if (window.scrollY > 100) {
      document.querySelector(
        "nav"
      ).style.boxShadow = `2px -8px 28px 0px #344D90`;
    } else {
      document.querySelector("nav").style.boxShadow = `0px 0px 0px 0px white`;
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  function handleNavClick(pos) {
    const classOfMain = (<Main />).type.styledComponentId;
    const classOfAbout = (<About />).type.styledComponentId;
    const classOfWorks = (<Works />).type.styledComponentId;
    const classOfSkills = (<Skills />).type.styledComponentId;
    const classOfContactSection = (<ContactSection />).type.styledComponentId;
    const aboutPosition =
      document.querySelector(`.${classOfMain}`).offsetHeight - 60;
    const worksPosition =
      aboutPosition + document.querySelector(`.${classOfAbout}`).offsetHeight;
    const skillsPosition =
      document.querySelector(`.${classOfSkills}`).offsetTop - 60;
    const contactPosition =
      document.querySelector(`.${classOfContactSection}`).offsetTop - 60;
    const arr = [
      {
        name: "0",
        value: 0,
      },
      {
        name: "aboutPosition",
        value: aboutPosition,
      },
      {
        name: "worksPosition",
        value: worksPosition,
      },
      {
        name: "skillsPosition",
        value: skillsPosition,
      },
      {
        name: "contactPosition",
        value: contactPosition,
      },
    ];
    arr.map((section) => {
      if (pos == section.name) {
        window.scrollTo(0, section.value);
        console.log(section);
      }
    });
  }
  return (
    <Navpanel open={open}>
      {/* <nav> */}
      <section>
        <p onClick={() => handleNavClick(0)}>{`<SebastianSutkowski/>`}</p>
      </section>
      <ul>
        <li onClick={() => handleNavClick(0)}>Home</li>
        <li onClick={() => handleNavClick("aboutPosition")}>About</li>
        <li onClick={() => handleNavClick("worksPosition")}>Works</li>
        <li onClick={() => handleNavClick("skillsPosition")}>Technologies</li>
        <li onClick={() => handleNavClick("contactPosition")}>Contact</li>
      </ul>
      <div onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <section>
        <ul>
          <li onClick={() => (handleNavClick(0), setOpen(!open))}>Home</li>
          <li onClick={() => (handleNavClick("aboutPosition"), setOpen(!open))}>
            About
          </li>
          <li onClick={() => (handleNavClick("worksPosition"), setOpen(!open))}>
            Works
          </li>
          <li
            onClick={() => (handleNavClick("skillsPosition"), setOpen(!open))}
          >
            Technologies
          </li>
          <li
            onClick={() => (handleNavClick("contactPosition"), setOpen(!open))}
          >
            Contact
          </li>
        </ul>
      </section>
      {/* //</nav> */}
    </Navpanel>
  );
};

export default Navigation;
