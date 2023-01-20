import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FAFAFA;
    --purple-light: #EBE5F9;
    --purple: #8047F8;
    --purple-dark: #4B2995;
    --yellow-light: #F1E9C9;
    --yellow-dark: #C47F17;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    padding: 0 16rem;
    margin: 0 auto;
    background-color: var(--background);
  }
`;
