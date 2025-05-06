// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: #000;
    color: #fff;
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
