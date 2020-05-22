import React from 'react';
import { Skills } from './MySkills.css';
import svgSkills from '../img/svgSkills.svg'
const icons = [
   {
      color: '#f34f29',
      class: 'fab fa-git-alt',
      description: 'git'
   },
   {
      color: '#61dbfb',
      class: 'fab fa-react',
      description: 'git'
   },
   {
      color: '#f0db4f',
      class: 'fab fa-js-square',
      description: 'git'
   },
   {
      color: '#F16529',
      class: 'fab fa-html5',
      description: 'git'
   },
   {
      color: '#264de4',
      class: 'fab fa-css3-alt',
      description: 'git'
   },
   {
      color: '#cc6699',
      class: 'fab fa-sass',
      description: 'git'
   },
]
const MySkills = () => {
   return (
      <Skills>
         <header>
            <h1>My Skills</h1>
         </header>
         <section>
            <div>
               {icons.map(icon => {
                  return (
                     <div>
                        <i style={{ color: icon.color }} class={icon.class}></i>
                     </div>
                  )
               })}
            </div>
            <img src={svgSkills} alt="photo" />
         </section>

      </Skills >

   );
}

export default MySkills;