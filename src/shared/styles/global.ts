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
    line-height: 130%;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    /* max-width: 80vw;
    margin: 0 auto; */
    background-color: var(--background);
  }
  
  @media (max-width: 768px) {
    body {
      padding: 0 2rem;
    }
  }
`;
