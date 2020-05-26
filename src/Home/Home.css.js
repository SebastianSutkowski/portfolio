import styled from "styled-components";
export const Main = styled.article`
  height: calc(100vh - 60px);
  display: flex;
  padding-top: 60px;
  background: linear-gradient(
    300deg,
    ${(props) => props.theme.colors.blue.normal} 44%,
    white 44%
  );

  section:nth-child(1) {
    flex: 1;
    // background-color: green;
    margin-left: 15vw;
    margin-top: 50vh;
    transform: translate(0, -60%);
    h1 {
      padding: 5px;
      font-weight: 600;
      min-width: 243px;
      color: ${(props) => props.theme.colors.blue.dark};
    }
    h2 {
      min-width: 185px;
      padding: 5px;

      color: ${(props) => props.theme.colors.blue.normal};
    }
    h3 {
      padding: 5px;
      color: ${(props) => props.theme.colors.blue.normal};
    }
  }
  section:nth-child(2) {
    flex: 1;
    position: relative;
    img {
      position: absolute;
      bottom: 10vh;
      width: 80%;
    }
  }
  @media (max-width: 1024px) {
    section:nth-child(1) {
      margin-left: 5vw;
    }
  }
  @media (max-width: 720px) {
    section:nth-child(1) {
      margin-top: 40vh;
      margin-left: 5vw;
      h1 {
        font-size: 25px;
      }
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 15px;
      }
    }
    section:nth-child(2) {
      img {
        position: absolute;
        bottom: 5vh;
        right: 5vw;
        width: 40vw;
        min-width: 220px;
      }
    }
  }
`;
