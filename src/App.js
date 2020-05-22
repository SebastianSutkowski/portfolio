import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navigation from './Navigation/Navigation'
// import Home from './Home/Home'
import normalizedStyles from './normalizedStyles/normalizedStyles'
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import MyWorks from './MyWorks/MyWorks';
import MySkills from './MySkills/MySkills';

function App() {
  return (
    <ThemeProvider theme={normalizedStyles}>
      <Navigation />
      <Home />
      <AboutMe />
      <MyWorks />
      <MySkills />
      <footer>

      </footer>
    </ThemeProvider>


  );
}

export default App;
