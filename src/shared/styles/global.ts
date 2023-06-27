import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FAFAFA;
    --purple-light: #EBE5F9;
    --purple: #8047F8;
    --purple-dark: #4B2995;
    --yellow-dark: #C47F17;
    --yellow: #DBAC2C;
    --yellow-light: #F1E9C9;

    --black-300: #574F4D;
  
    --subtitle: #403937;
    --card: #F3F2F2;
    --label: #8D8686;
    --button: #E6E5E5;
    --input: #EDEDED;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--background);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "Baloo 2", cursive;
  }

  @media (max-width: 768px) {
    body {
      padding: 0 2rem;
    }
  }
`;
