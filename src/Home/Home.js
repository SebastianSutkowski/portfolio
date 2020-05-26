import React from "react";
import { Main } from "./Home.css";
// import './Home.scss';
import Button from "../pageElements/Button";
import svgMain from "../img/svgMain.svg";
import { ContactSection } from "../Contact/Contact.css";
const Home = () => {
  function handleContactClick() {
    const classOfContactSection = (<ContactSection />).type.styledComponentId;
    const contactPosition =
      document.querySelector(`.${classOfContactSection}`).offsetTop - 60;
    window.scrollTo(0, contactPosition);
    console.log(contactPosition);
    return contactPosition;
  }
  return (
    <Main>
      {/* <article> */}
      <section>
        <h1>Sebastian Sutkowski</h1>
        <h2>Front-end develoer</h2>
        <h3>lets check my portfolio and hire me</h3>
        <Button pos={() => handleContactClick()} content={"contact me"} />
      </section>
      <section>
        <img src={svgMain} alt="svgMain" />
      </section>
      {/* </article> */}
    </Main>
  );
};

export default Home;
