import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { ThemeProvider } from "styled-components";
import Navigation from "./Navigation/Navigation";
// import Home from './Home/Home'
import normalizedStyles from "./normalizedStyles/normalizedStyles";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import MyWorks from "./MyWorks/MyWorks";
import MySkills from "./MySkills/MySkills";
import Contact from "./Contact/Contact";
import styled from "styled-components";
const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.blue.dark};
  padding: 10px 0;
  color: white;
  text-align: center;
  a {
    color: #ddd;
    text-decoration: none;
  }
`;
function App() {
  return (
    <ThemeProvider theme={normalizedStyles}>
      <Navigation />
      <Home />
      <AboutMe />
      <MyWorks />
      <MySkills />
      <Contact />
      <Footer>
        Copyrights © 2020
        <a
          href="https://github.com/sebo9611"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Sebastian Sutkowski
        </a>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
