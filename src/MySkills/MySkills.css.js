import styled from 'styled-components';
export const Skills = styled.article`
margin-top: 5vw;
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
   margin-top:3vw;
   position: relative;
   div{
      display:flex;
      justify-content:center;
      div{
         border-radius:50%;
         width:calc(70px + 5vw);
         height:calc(70px + 5vw);
         position:relative;
         margin: 0 1vw;
         box-shadow: 0px 0px 29px -9px ${props => props.theme.colors.blue.dark};
         i{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-size:calc(50px + 3vw);
            transition:.2s;
         }
         p{
            display:block;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%) scaleX(0);
            font-size:20px;
            transition:.15s;
            color:${props => props.theme.colors.blue.dark};
            font-weight:600;
            text-align:center;
         }
      }
      div:hover{
         i{
            transform:translate(-50%,-50%) scaleX(0);
         }
         p{
            transition-delay: .2s;
            transform:translate(-50%,-50%) scaleX(1);
         }
      }
      
   }
   img{
      position:relative;
      width: 30vw;
      left:50%;
      transform:translate(-50%,0);
   }


}
`