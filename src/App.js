import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navigation from './Navigation/Navigation'
// import Home from './Home/Home'
import normalizedStyles from './normalizedStyles/normalizedStyles'
import Home from './Home/Home';
import { Main } from './Home/Home.css';
import AboutMe from './AboutMe/AboutMe';
import { About } from './AboutMe/AboutMe.css';
import MyWorks from './MyWorks/MyWorks';
import { Works } from './MyWorks/MyWorks.css'
import MySkills from './MySkills/MySkills';
import { Skills } from './MySkills/MySkills.css';
import Contact from './Contact/Contact';
import { ContactSection } from './Contact/Contact.css';
import styled from 'styled-components';
const Footer = styled.footer`
background-color:  ${props => props.theme.colors.blue.dark};
padding:10px 0;
color:white;
text-align:center;
a{
  color:#ddd;
  text-decoration:none;
}
`
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
      <a href="https://github.com/sebo9611" target="_blank"> Sebastian Sutkowski</a>
      </Footer>
    </ThemeProvider>


  );
}

export default App;
