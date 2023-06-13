import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FAFAFA;
    --purple-light: #EBE5F9;
    --purple: #8047F8;
    --purple-dark: #4B2995;
    --yellow-light: #F1E9C9;
    --yellow-dark: #C47F17;

    --black-300: #574F4D;
    
    --card: #F3F2F2;
    --label: #8D8686;
    --button: #E6E5E5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }

  button {
    all: unset;
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
