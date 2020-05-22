import React from 'react';
import { Main } from './Home.css';
// import './Home.scss';
import Button from '../pageElements/Button'
import svgMain from '../img/svgMain.svg'
const Home = () => {
   return (
      <Main>
         {/* <article> */}
         <section>
            <h1>Sebastian Sutkowski</h1>
            <h2>Front-end develoer</h2>
            <h3>lets check my portfolio and hire me</h3>
            <Button content={'contact me'} />
         </section>
         <section>
            <img src={svgMain} alt="photo" />
         </section>
         {/* </article> */}


      </Main>

   );
}

export default Home;