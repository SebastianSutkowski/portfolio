import React from 'react';
import styled from 'styled-components'
const ButtonRender = styled.button`
font-size:20px;
padding: 10px 40px;
margin: 10px 0;
background-color:${props => props.theme.colors.blue.dark};
color:white;
border:none;
border-radius:10px;
border:solid 1px white;
transition:.3s;
cursor:pointer;
&:hover{
   background-color:${props => props.theme.colors.blue.normal};
}
`
const Button = ({ content }) => {
   return (
      <ButtonRender>
         {content}
      </ButtonRender>
   );
}

export default Button;