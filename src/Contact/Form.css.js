import styled from 'styled-components';
export const FormPanel = styled.div`
width:auto;
flex:1;
position: relative;
right:0;
form{
   padding:15px;
   display:flex;
   flex-direction:column;
   input,textarea{
      border:none;
      padding:0 10px;
      border-radius:10px;
      box-shadow: 0px 0px 15px -4px ${props => props.theme.colors.blue.dark};
   }
   input:focus {
      /* border:solid 10px ${props => props.theme.colors.blue.dark}; */
   }
   input:nth-of-type(1){
      height:30px;
      margin-bottom:15px;
      min-width:300px;
   }
   textarea{
      padding:10px 10px;
      height:calc(24vw - 110px);
      min-height:130px;
      min-width:300px;
      margin-bottom:15px;
      resize:none;
   }
   button{
      width:200px;
   }
}

`