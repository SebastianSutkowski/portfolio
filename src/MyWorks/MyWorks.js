import React from "react";
// import './MyWorks.scss'
import { Works } from "./MyWorks.css";
import medyk from "../img/medyk.PNG";
import portfolio from "../img/portfolio.PNG";

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
    img: medyk,
    description: "comercial project realised for my sports-club",
    repo: "https://github.com/sebo9611/portfolio",
    live: "https://sebo9611.github.io/portfolio/",
  },
];
const MyWorks = () => {
  return (
    <Works>
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