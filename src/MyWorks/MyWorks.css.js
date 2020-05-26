import styled from "styled-components";
export const Works = styled.article`
  padding-top: 5vw;
  // background-color: rgba(238, 238, 238, 0.562);
  position: relative;
  header {
    text-align: center;
    h1 {
      display: block;
      width: auto;
      font-weight: 600;
      color: ${(props) => props.theme.colors.blue.dark};
    }
  }
  section {
    margin-top: 5vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
      box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.75);
      overflow: hidden;
      margin: 0 1vw;
      display: block;
      background-color: ${(props) => props.theme.colors.blue.normal};
      border-radius: 10px;
      width: 25vw;
      position: relative;

      div {
        margin: 0;
        width: 100%;
        height: 100%;
        /* display: none; */
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.5s;
        opacity: 0;
        clip-path: circle(5% at 100% 0%);
        p {
          padding: 2vw 2vw 0 2vw;
          font-size: 20px;
          position: absolute;
          /* top: 50%; */
        }
        button {
          position: absolute;

          width: 8vw;

          overflow: hidden;
          background-color: ${(props) => props.theme.colors.blue.dark};

          border: none;
          border-radius: 10px;
          cursor: pointer;
          a {
            color: white;
            font-size: 20px;
            font-weight: 500;
            padding: 10px 0;
            position: relative;
            display: block;
            text-decoration: none;
            height: 100%;
            /* background-color: #fff; */
          }
        }
        button:nth-of-type(1) {
          bottom: 10%;
          left: 10%;
        }
        button:nth-of-type(2) {
          bottom: 10%;
          right: 10%;
        }
      }
      img {
        height: 15.4vw;
        opacity: 1;
        transition: 0.5s;
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        min-width: 100%;
        min-height: 100%;
      }
    }
    div:hover {
      img {
        opacity: 0;
      }
      div {
        clip-path: circle(150% at 100% 0%);
        display: block;
        opacity: 1;
      }
    }
  }
  @media (max-width: 1024px) {
    section {
      div {
        min-width: 270px;
        min-height: 141px;
        margin: 2vw 2vw;
        div {
          p {
            font-size: 18px;
          }
          button {
            font-size: 15px;
            width: auto;
            a {
              padding: 10px 15px;
            }
          }
        }
      }
    }
  }
`;
