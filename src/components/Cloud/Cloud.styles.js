import styled from "styled-components";

const CloudStyles = styled.div`
  position: absolute;
  top: ${(props) => props.height};
  display: flex;
  width: 100%;
  z-index: 1;

  div {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
    animation: movingClouds ${(props) => props.time} linear infinite;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
  }

  div:nth-child(odd) {
    margin-top: 20px;
    width: 60px;
    height: 60px;
  }

  div:not(:first-child) {
    margin-left: -30px;
  }

  @keyframes movingClouds {
    0% {
      transform: translateX(100vw);
    }

    100% {
      transform: translateX(-200px);
    }
  }
`;

export default CloudStyles;
