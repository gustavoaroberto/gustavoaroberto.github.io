import styled from "styled-components";

const GrassStyles = styled.div`
  position: absolute;
  bottom: 26px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;

  div {
    width: 100px;
    height: 100px;
    background-color: #636363;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
  }

  div:nth-child(even) {
    margin-top: -10px;
    width: 80px;
    height: 80px;
  }

  div:not(:first-child) {
    margin-left: -20px;
  }

  div:first-child {
    border-radius: 0% 100% 29% 71% / 100% 38% 62% 0%;
  }

  div:last-child {
    border-radius: 37% 63% 0% 100% / 58% 30% 70% 42%;
  }
`;

export default GrassStyles;
