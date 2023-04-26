import styled from "styled-components";

const GrassStyles = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  z-index: 1;

  div {
    width: 100px;
    height: 100px;
    background-color: #636363;
    border-radius: 50%;
    flex-grow: 20;
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
    border-radius: 46% 54% 0% 100% / 100% 0% 100% 0%;
  }
`;

export default GrassStyles;
