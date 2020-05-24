
import styled from 'styled-components'
export const About = styled.article`
   padding-top: 5vw;
   background-color: rgba(238, 238, 238, 0.562);
   header{
      text-align: center;
      h1{
        display: block;
        width: auto;
         font-weight: 600;
         color:${props => props.theme.colors.blue.dark};
      }
   }
   section{
      display: flex;
      margin: 0 10vw;
      
      img{
         width: 30vw;
      }
      p{
         /* height: 20vw; */
         padding:auto 0;
         padding-bottom:5vw;
         margin-left: 30px;
         font-size: 20px;
         margin-top: 20px;
         font-weight: 500;
         color:${props => props.theme.colors.blue.dark};
      }
   }
   @media (max-width:950px) {
      section{
      margin: 0 5vw;
      img{
        min-width:250px;
      }
      p{
         margin-left: 10px;
         font-size: 20px;
      }
   }
   @media (max-width:720px) {
      section{
      p{
         font-size: 15px;
      }
   }
}
   @media (max-width:720px) {
      section{
         img{
            display:none;
         }
   }
}
}
`