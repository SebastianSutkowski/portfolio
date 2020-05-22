import React, { useEffect, useState } from 'react';
import { Navpanel } from './Navigation.css'
// import './Nav.scss'

const Navigation = () => {
   const [scrollY, setScrollY] = useState(0);

   function logit() {
      setScrollY(window.pageYOffset);

      if (window.scrollY > 100) {
         console.log('window.scrollY')
         document.querySelector('nav').style.boxShadow = `2px -8px 28px 0px #344D90`
      } else {
         document.querySelector('nav').style.boxShadow = `0px 0px 0px 0px white`
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
   })
   return (
      <Navpanel>
         {/* <nav> */}
         <section>
            <p>{`<SebastianSutkowski/>`}</p>
         </section>
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Technologies</li>
            <li>Contact</li>
         </ul>
         {/* //</nav> */}
      </Navpanel>
   );
}

export default Navigation;