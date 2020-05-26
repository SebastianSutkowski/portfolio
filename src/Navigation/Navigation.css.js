import styled from "styled-components";
// import React,{useEffect} from 'react';

export const Navpanel = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: white;
  box-shadow: ${window.scrollY > 20
    ? `2px -8px 28px 0px ${(props) => props.theme.colors.blue.dark}`
    : null};
  z-index: 10;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  height: 60px;
  line-height: 60px;
  color: ${(props) => props.theme.colors.blue.dark};
  transition: 0.3s;
  section:nth-of-type(1) {
    flex: 3;
    // background-color:red;
    text-align: center;
    p {
      cursor: pointer;
    }
  }
  ul {
    flex: 8;
    // background-color: green;
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      padding: 0 1vw;
    }
    li:hover {
      color: ${(props) => props.theme.colors.blue.normal};
      cursor: pointer;
    }
  }
  div {
    display: none;
    width: 30px;
    /* background-color: red; */
    height: 30px;
    overflow: hidden;
    cursor: pointer;
    margin: 15px 10vw;
  }
  section:nth-of-type(2) {
    position: absolute;
    margin-left: 100vw;
    transition: 0.3s;
    ul {
      display: flex;
      flex-direction: column;
      /* background-color: #fff; */
      z-index: 20;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      li {
        margin: auto;
        font-size: 30px;
      }
    }
  }
  @media (max-width: 750px) {
    section:nth-of-type(1) {
      flex: 1;
    }
    ul:nth-of-type(1) {
      display: none;
    }
    div {
      display: block;
      z-index: 2;

      div {
        width: 100%;

        height: 4px;
        margin: calc(25% - 2px) 0;
        background-color: ${(props) => props.theme.colors.blue.dark};
        border-radius: 2px;
        transition: 0.3s;
      }
      div:nth-of-type(1) {
        transform: ${({ open }) =>
          open ? "rotate(0deg)" : "translate(0, 7px) rotate(45deg)"};
      }
      div:nth-of-type(2) {
        opacity: ${({ open }) => (open ? "1" : "0")};
      }
      div:nth-of-type(3) {
        transform: ${({ open }) =>
          open ? "rotate(0deg)" : "translate(0, -12px) rotate(-45deg)"};
      }
    }
    section:nth-of-type(2) {
      margin-left: ${({ open }) => (open ? "100vw" : "0vw")};
      position: absolute;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      background-color: white;
    }
  }
`;
