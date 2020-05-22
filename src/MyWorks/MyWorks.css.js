import styled from 'styled-components';
export const Works = styled.article`
margin-top: 5vw;
// background-color: rgba(238, 238, 238, 0.562);
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
   margin-top: 5vw;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   div{
      box-shadow: 0px 0px 30px -4px rgba(0,0,0,0.75);
      overflow: hidden;
      margin: 0 1vw;
      display: block;
      background-color: ${props => props.theme.colors.blue.normal};
      border-radius: 10px;
      width:25vw;
      position: relative;
      
      div{
         margin: 0;
         width:100%;
         height: 100%;
         /* display: none; */
         color:white;
         position: absolute;
         top:0;
         left:0;
         transition: .3s;
         opacity:0;
         clip-path:circle(5% at 100% 0%);
         p{
            padding:2vw 2vw 0 2vw;
            font-size:20px;
            position: absolute;
            /* top: 50%; */
         }
         button{
            position: absolute;
            font-size:20px;
            width:8vw;
            font-weight:500;
            padding: 10px 0;
            background-color:${props => props.theme.colors.blue.dark};
            color:white;
            border:none;
            border-radius:10px;
            transition:.3s;
            cursor:pointer;
         }
         button:nth-of-type(1){
            bottom:10%;
            left:10%;
         }
         button:nth-of-type(2){
            bottom:10%;
            right:10%;
         }

      }
      img{
         height:15.4vw; 
         opacity:1;
         transition:.5s ;
      }
   }
   div:hover{
      img{
         opacity:0;
      }
      div{
         clip-path:circle(150% at 100% 0%);
         display: block;
         opacity:1;
         
      }
   }
}
`