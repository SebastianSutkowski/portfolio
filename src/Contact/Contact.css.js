import styled from 'styled-components';
export const ContactSection = styled.article`
margin: 5vw 10vw;
/* padding-top: 5vw; */
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
   display:flex;
   flex-direction:row;
   img{
      width:30vw;
   }
}
`