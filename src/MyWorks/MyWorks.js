import React, { useState, useEffect } from "react";
// import './MyWorks.scss'
import { Works } from "./MyWorks.css";
import medyk from "../img/medyk.PNG";
import portfolio from "../img/portfolio.PNG";
import to_do from "../img/to_do.PNG";

const Porjects = [
  {
    img: medyk,
    description:
      "First comercial project realised for my sports-club (not finished).",
    repo: "https://github.com/sebo9611/medyk.lomza",
    live: "https://sebo9611.github.io/medyk.lomza/#/",
  },
  {
    img: portfolio,
    description: "Portfolio you are currently watching ",
    repo: "https://github.com/sebo9611/portfolio",
    live: "https://sebo9611.github.io/portfolio/",
  },
  {
    img: to_do,
    description: "Project realised while learning react",
    repo: "https://github.com/sebo9611/to_do_react",
    live: "https://sebo9611.github.io/to_do_react/",
  },
];
const MyWorks = () => {
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
    const classOfWorks = (<Works />).type.styledComponentId;
    const vh = window.innerHeight;
    const worksPosition =
      document.querySelector(`.${classOfWorks}`).offsetTop - 0.8 * vh;
    if (window.scrollY > worksPosition) {
      setShow(true);
    }
  }
  return (
    <Works show={show}>
      <header>
        <h1>My Works</h1>
      </header>
      <section>
        {Porjects.map((project) => {
          return (
            <div key={project.description}>
              <img src={project.img} alt={project.img} />

              <div>
                <p>{project.description}</p>

                <button>
                  <a href={project.live}>live</a>
                </button>

                <button>
                  <a href={project.repo}>repo</a>
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </Works>
  );
};

export default MyWorks;
