import { createGlobalStyle } from "styled-components";
import darkTheme from "./dark";
import lightTheme from "./light";

export const GlobalStyle = createGlobalStyle`
     *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
    color: ${({ theme }) => theme.color};
  }

  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

const themes = [lightTheme, darkTheme];

export default themes;
