import styled from 'styled-components'
// import React,{useEffect} from 'react';

export const Navpanel = styled.nav`
position:fixed;
top:0;
left:0;
display: flex;
background-color:white;
box-shadow: ${ (window.scrollY > 20) ? `2px -8px 28px 0px ${props => props.theme.colors.blue.dark}` : null};
z-index:10;
   width: 100%;
   font-size: 20px;
   font-weight: 600;
   height: 60px;
   line-height: 60px;
   color:${props => props.theme.colors.blue.dark};
   transition: .3s;
   section {
      flex: 3;
      // background-color:red;
      text-align: center;
      p{
         cursor:pointer;
      }
      }
      ul {
         flex: 8;
         // background-color: green;
         display: flex;
         justify-content: center;
         list-style-type: none;
         li{
            padding: 0 1vw;
         }
         li:hover{
            color:${props => props.theme.colors.blue.normal};
            cursor:pointer;
         }
      }
`