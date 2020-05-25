import React from 'react';
// import './MyWorks.scss'
import { Works } from './MyWorks.css';
import medyk from '../img/medyk.PNG';
import portfolio from '../img/portfolio.PNG';
import Button from '../pageElements/Button';
import { find } from 'styled-components/test-utils'

const Porjects = [
   {
      img: medyk,
      description: 'First comercial project realised for my sports-club (not finished).',
   },
   {
      img: portfolio,
      description: 'Portfolio you are currently watching ',
   },
   {
      img: medyk,
      description: 'comercial project realised for my sports-club',
   }

]
const MyWorks = () => {
   const classOfStyled = (<Works />).type.styledComponentId
   const element = document.getElementsByClassName(`${classOfStyled}`)
   const arr = document.querySelectorAll(`article`)
   // console.log(<Works />)
   // console.log(arr)
   return (
      <Works>
         <header><h1>My Works</h1></header>
         <section>
            {
               Porjects.map(project => {
                  return (
                     <div>
                        <img src={project.img} alt="photo" />

                        <div>
                           <p>{project.description}</p>
                           <button>live</button>
                           <button>repo</button>
                        </div>
                     </div>
                  )
               })
            }
         </section>
      </Works>
   );
   console.log(document.querySelector("." + classOfStyled).offsetTop)
}

export default MyWorks;