import styled from 'styled-components'
import dog from '../img/dog.jpg'
export const Main = styled.article`
height:calc( 100vh - 60px );
display:flex;
padding-top:60px;
background: linear-gradient(300deg, ${props => props.theme.colors.blue.normal} 44%, white 44%);

section:nth-child(1){
   flex:1;
   // background-color: green;
   margin-left: 15vw;
   margin-top: 50vh;
   transform: translate(0, -60%);
   h1{
      padding: 5px;
      font-weight:600;
      color:${props => props.theme.colors.blue.dark};
   }
   h2{
      padding: 5px;
      color:${props => props.theme.colors.blue.normal}
   }
   h3{
      padding: 5px;
      color:${props => props.theme.colors.blue.normal}
   }
}
section:nth-child(2){
   flex:1;
   position:relative;
   img{
      position:absolute;
      bottom:10vh;
      width:80%;
   }
}
`