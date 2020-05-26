import React from "react";
import { ContactSection } from "./Contact.css";
import svgMail from "../img/svgMail.svg";
import MyForm from "./MyForm";

const Contact = () => {
  return (
    <ContactSection>
      <header>
        <h1>Contact Me</h1>
      </header>
      <section>
        <MyForm />
        <img src={svgMail} alt="svgMail" />
      </section>
    </ContactSection>
  );
};

export default Contact;
